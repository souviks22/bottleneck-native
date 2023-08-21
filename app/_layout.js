import { useEffect } from "react"
import { SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { Slot, useRouter } from "expo-router"
import { Provider } from "react-redux"
import { colors } from "../colors"

import AsyncStorage from "@react-native-async-storage/async-storage"
import store from "../store"

const Layout = () => {
    const router = useRouter()
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem('token')
            if (!token) router.replace('/auth/signup')
        })()
    }, [])
    return (<Provider store={store}>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={styles.container}>
            <Slot />
        </SafeAreaView>
    </Provider>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        backgroundColor: colors.primary
    }
})

export default Layout