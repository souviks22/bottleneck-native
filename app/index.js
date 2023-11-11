import { useState, useEffect } from "react"
import { ScrollView, StyleSheet } from "react-native"
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

const { tokenKey, idKey } = Constants.expoConfig.extra

const Home = () => {
    const router = useRouter()
    const { httpRequest, isLoading } = useHttp()
    const dispatch = useDispatch()
    const { firstname, email, image } = useSelector(state => state.user.user)
    const [fields, setFields] = useState([])

    useEffect(() => {
        catchAsync(async () => {
            const token = await AsyncStorage.getItem(tokenKey)
            const _id = await AsyncStorage.getItem(idKey)
            if (token) {
                const { user } = await httpRequest(`/users/${_id}`)
                dispatch(userActions.changeUser({ ...user, token }))
                const { fields } = await httpRequest('/algorithms')
                setFields(fields)
            }
            else router.replace('/auth')
        })()
    }, [])

    return (<Container>
        <Header name={firstname || (email && email.split('@')[0])} image={image} />
        <ScrollView contentContainerStyle={styles.tabs} horizontal>
            <Tab id={'all'} label={'All Topics'} />
            {fields.map(({ _id, name, level }) =>
                <Tab key={_id} id={_id} label={name} level={level} />
            )}
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