import { useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { colors } from "../colors"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Container from "../components/lib/Container"
import Header from "../components/home/Header"
import Tab from "../components/home/Tab"

const { tokenKey } = Constants.expoConfig.extra

const Home = () => {
    const router = useRouter()
    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem(tokenKey)
            if (!token) router.replace('/auth')
        })()
    }, [])

    return (<Container>
        <Header />
        <ScrollView contentContainerStyle={styles.tabs} horizontal>
            <Tab id={1} label={'All Topics'} />
            <Tab id={2} label={'Array'} />
            <Tab id={3} label={'Sort'} />
            <Tab id={4} label={'Trees'} />
            <Tab id={5} label={'Graph'} />
        </ScrollView>
    </Container>)
}

const styles = StyleSheet.create({
    tabs: {
        maxHeight: 40,
        marginVertical: 30
    }
})

export default Home