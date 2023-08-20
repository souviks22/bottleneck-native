import { useEffect } from "react"
import { Text, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { colors } from "../colors"

import AsyncStorage from "@react-native-async-storage/async-storage"

const Home = () => {
    const router = useRouter()
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('token')
            if (!token) router.replace('/auth/signup')
        })()
    }, [])
    return (<Text style={styles.test}>Hello World</Text>)
}

const styles = StyleSheet.create({
    test: {
        color: colors.dark
    }
})

export default Home