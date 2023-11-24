import { useState, useEffect } from "react"
import { ScrollView, StyleSheet, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"
import { useDispatch, useSelector } from "react-redux"
import { useAsync } from "../hooks/use-async"
import { useHttp } from "../hooks/use-http"
import { userActions } from "../store/user-slice"

import AsyncStorage from "@react-native-async-storage/async-storage"
import Constants from "expo-constants"
import Container from "../components/lib/Container"
import Header from "../components/home/Header"
import Tab from "../components/home/Tab"
import Tile from "../components/home/Tile"

const { tokenKey, idKey } = Constants.expoConfig.extra

const Home = () => {
    const router = useRouter()
    const [getRequest, isLoading] = useHttp()
    const [algorithmsRequest, isAlgorithmsLoading] = useHttp()
    const dispatch = useDispatch()
    const catchAsync = useAsync()
    const { user } = useSelector(state => state.user)
    const [fields, setFields] = useState([])
    const activeTab = useSelector(state => state.tab.currentTab)
    const [algorithms, setAlgorithms] = useState([])

    useEffect(() => {
        catchAsync(async () => {
            const token = await AsyncStorage.getItem(tokenKey)
            const _id = await AsyncStorage.getItem(idKey)
            if (token) {
                const { user } = await getRequest(`/users/${_id}`)
                dispatch(userActions.changeUser({ ...user, token }))
                const { fields } = await getRequest('/fields')
                setFields(fields)
            }
            else router.replace('/auth')
        })()
    }, [])

    useEffect(() => {
        catchAsync(async () => {
            const token = await AsyncStorage.getItem(tokenKey)
            if (token) {
                const { algorithms } = await algorithmsRequest(activeTab === 'all' ? '/algorithms' : `/fields/${activeTab}`)
                setAlgorithms(algorithms)
            }
        })()
    }, [activeTab])

    return (<Container style={styles.container} isLoading={isLoading || !user}>
        <Header name={user.firstname || user.email} image={user.image} />
        <ScrollView contentContainerStyle={styles.tabs} horizontal>
            <Tab id={'all'} label={'All Topics'} />
            {fields.map(({ _id, name, level }) =>
                <Tab key={_id} id={_id} label={name} level={level} />
            )}
        </ScrollView>
        <ScrollView contentContainerStyle={{
            ...styles.tiles,
            justifyContent: isAlgorithmsLoading ? 'center' : 'flex-start'
        }}>
            {isAlgorithmsLoading || !user ? <ActivityIndicator /> :
                algorithms.map(({ _id, name, difficulty }) =>
                    <Tile key={_id} id={_id} name={name} difficulty={difficulty} />
                )
            }
        </ScrollView>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    },
    tabs: {
        height: 40,
        marginTop: 30,
        marginBottom: 40
    },
    tiles: {
        minHeight: 400,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 15,
        overflow: 'hidden'
    }
})

export default Home