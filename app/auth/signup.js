import { View, StyleSheet } from "react-native"
import Header from "../../components/auth/signup/Header"
import Button from "../../components/auth/ui/Button"
import Separator from "../../components/auth/ui/Separator"
import Helper from "../../components/auth/ui/Helper"
import Footer from "../../components/auth/signup/Footer"

const Signup = () => {
    return (<View style={styles.signup}>
        <Header />
        <Button
            label={'Sign up with Google'}
            icon={require('../../public/google.png')}
        />
        <Button
            label={'Sign up with Facebook'}
            icon={require('../../public/facebook.png')}
        />
        <Separator />
        <Button label={'Create account'} blue />
        <View style={styles.signin}>
            <Helper label={'Already have an account?'} />
            <Button label={'Sign in'} blueLabel />
        </View>
        <Footer />
    </View>)
}

const styles = StyleSheet.create({
    signup: {
        flex: 1
    },
    signin: {
        marginTop: 30
    }
})

export default Signup