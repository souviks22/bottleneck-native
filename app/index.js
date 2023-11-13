import { useState, useEffect } from "react"
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { useHttp } from "../hooks/use-http"
import { userActions } from "../store/user-slice"
import { catchAsync } from "../errors/async"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Container from "../components/lib/Container"
import Header from "../components/home/Header"
import Tab from "../components/home/Tab"
import Tile from "../components/home/Tile"

const { tokenKey, idKey } = Constants.expoConfig.extra

const Home = () => {
    const router = useRouter()
    const { httpRequest, isLoading } = useHttp()
    const dispatch = useDispatch()
    const { firstname, email, image } = useSelector(state => state.user.user)
    const [fields, setFields] = useState([])
    const activeTab = useSelector(state => state.tab.currentTab)
    const [algorithms, setAlgorithms] = useState([])

    useEffect(() => {
        catchAsync(async () => {
            const token = await AsyncStorage.getItem(tokenKey)
            const _id = await AsyncStorage.getItem(idKey)
            if (token) {
                const { user } = await httpRequest(`/users/${_id}`)
                dispatch(userActions.changeUser({ ...user, token }))
                const { fields } = await httpRequest('/algorithms')
                setFields(fields)
                const { algorithms } = await httpRequest(`/algorithms/${activeTab}`)
                setAlgorithms(algorithms)
            }
            else router.replace('/auth')
        })()
    }, [])

    useEffect(() => {
        catchAsync(async () => {
            const token = await AsyncStorage.getItem(tokenKey)
            if (token) {
                const { algorithms } = await httpRequest(`/algorithms/${activeTab}`)
                setAlgorithms(algorithms)
            }
        })()
    }, [activeTab])

    return (<Container>
        <Header name={firstname || (email && email.split('@')[0])} image={image} />
        <ScrollView contentContainerStyle={styles.tabs} horizontal>
            <Tab id={'all'} label={'All Topics'} />
            {fields.map(({ _id, name, level }) =>
                <Tab key={_id} id={_id} label={name} level={level} />
            )}
        </ScrollView>
        <ScrollView contentContainerStyle={styles.tiles}>
            {isLoading ? <ActivityIndicator /> :
                algorithms.map(({ _id, name, difficulty }) =>
                    <Tile key={_id} name={name} difficulty={difficulty} />
                )
            }
        </ScrollView>
    </Container>)
}

const styles = StyleSheet.create({
    tabs: {
        height: 40,
        marginTop: 30,
        marginBottom: 40
    },
    tiles: {
        minHeight: 400,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home