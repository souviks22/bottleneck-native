import { useState } from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { useNavigation } from "expo-router"
import { useHttp } from "../../hooks/use-http"
import { catchAsync } from "../../errors/async"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Container from "../../components/lib/Container"
import Header from "../../components/auth/signin/Header"
import Input from "../../components/auth/signin/Input"
import Poster from "../../components/auth/ui/Poster"
import Separator from "../../components/auth/ui/Separator"
import Button from "../../components/auth/ui/Button"

const { tokenKey } = Constants.expoConfig.extra

const Signin = () => {
    const navigator = useNavigation()
    const { httpRequest, isLoading } = useHttp()
    const [email, setEmail] = useState(), [password, setPassword] = useState()
    const emailChangeHandler = value => setEmail(value.trim())
    const passwordChangeHandler = value => setPassword(value.trim())
    const signinHandler = catchAsync(async () => {
        const { token } = await httpRequest('/signin', 'post', { email, password })
        await AsyncStorage.setItem(tokenKey, token)
        navigator.reset({ index: 0, routes: [{ name: 'index' }] })
    })

    return (<Container>
        <Header />
        <Input label={'Email Address'} onChange={emailChangeHandler} />
        <Input label={'Password'} onChange={passwordChangeHandler} secure />
        <View style={styles.actions}>
            <Button label={isLoading ? <ActivityIndicator /> : 'Sign In'} handler={signinHandler} blue />
        </View>
        <Separator top={4} />
        <Button label={'Sign In with Google'} icon={require('../../public/google.png')} href={'/'} />
        <Poster uri={require('../../public/signin.png')} />
    </Container>)
}

const styles = StyleSheet.create({
    actions: {
        marginTop: '5%'
    }
})

export default Signin