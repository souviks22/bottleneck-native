import { View, StyleSheet } from "react-native"

import Container from "../../components/lib/Container"
import Header from "../../components/auth/signup/Header"
import Input from "../../components/auth/signup/Input"
import Button from "../../components/auth/ui/Button"
import Poster from "../../components/auth/ui/Poster"
import Helper from "../../components/auth/ui/Helper"

const Signup = () => {
    return (<Container>
        <Poster uri={require('../../public/signin.png')} />
        <Header />
        <Input label={'Username or Email'} onChange={() => { }} />
        <Input label={'Password'} onChange={() => { }} secure />
        <View style={styles.actions}>
            <Button
                label={'Sign Up'}
                href={'/'}
                blue
            />
            <Helper
                label={'Already have an account?'}
                link={'Sign In'}
                href={'/auth/signin'}
                centered
            />
        </View>
    </Container>)
}

const styles = StyleSheet.create({
    actions: {
        marginTop: '15%'
    }
})

export default Signup