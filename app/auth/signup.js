import { useState } from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { useNavigation } from "expo-router"
import { useHttp } from "../../hooks/use-http"
import { catchAsync } from "../../errors/async"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Container from "../../components/lib/Container"
import Header from "../../components/auth/signup/Header"
import Input from "../../components/auth/signup/Input"
import Button from "../../components/auth/ui/Button"
import Poster from "../../components/auth/ui/Poster"
import Helper from "../../components/auth/ui/Helper"

const { tokenKey, idKey } = Constants.expoConfig.extra

const Signup = () => {
    const navigator = useNavigation()
    const [httpRequest, isLoading] = useHttp()
    const [email, setEmail] = useState(), [password, setPassword] = useState()
    const emailChangeHandler = value => setEmail(value.trim())
    const passwordChangeHandler = value => setPassword(value.trim())
    const signupHandler = catchAsync(async () => {
        const { token, _id } = await httpRequest('/signup', 'post', { email, password })
        await AsyncStorage.setItem(tokenKey, token)
        await AsyncStorage.setItem(idKey, _id)
        navigator.reset({ index: 0, routes: [{ name: 'index' }] })
    })

    return (<Container style={styles.container}>
        <Poster uri={require('../../public/signin.png')} />
        <Header />
        <Input label={'Email Address'} onChange={emailChangeHandler} />
        <Input label={'Password'} onChange={passwordChangeHandler} secure />
        <View style={styles.actions}>
            <Button label={isLoading ? <ActivityIndicator /> : 'Sign Up'} handler={signupHandler} blue />
            <Helper label={'Already have an account?'} link={'Sign In'} href={'/auth/signin'} centered />
        </View>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    actions: {
        marginTop: '15%'
    }
})

export default Signup