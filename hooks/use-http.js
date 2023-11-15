import { useState } from "react"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"

const { api, tokenKey } = Constants.expoConfig.extra

export const useHttp = () => {
    const [isLoading, setIsLoading] = useState()
    const httpRequest = async (url, method = 'get', body = null) => {
        try {
            setIsLoading(true)
            const token = await AsyncStorage.getItem(tokenKey)
            const res = await fetch(`${api}${url}`, {
                method, body: body ? JSON.stringify(body) : null,
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            })
            const { success, message, data } = await res.json()
            setIsLoading(false)
            if (!success) throw new Error(message)
            return data
        } catch (error) {
            console.error(error)
        }
    }
    return [httpRequest, isLoading]
}