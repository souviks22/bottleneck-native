import { useEffect } from "react"
import { Text, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { colors } from "../colors"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"

const { tokenKey } = Constants.expoConfig.extra

const Home = () => {
    const router = useRouter()
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem(tokenKey)
            if (!token) router.replace('/auth')
        })()
    }, [])
    
    return (<Text style={styles.test}>Welcome to Bottleneck</Text>)
}

const styles = StyleSheet.create({
    test: {
        color: colors.dark
    }
})

export default Home