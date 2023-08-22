import { View, StyleSheet } from "react-native"
import Header from "../../components/auth/signin/Header"
import Input from "../../components/auth/signin/Input"
import Separator from "../../components/auth/ui/Separator"
import Button from "../../components/auth/ui/Button"

const Signin = () => {
    return (<View style={styles.signin}>
        <Header />
        <Input label={'Email address'} />
        <Input label={'Password'} secure />
        <Separator />
        <Button
            label={'Sign up with Google'}
            icon={require('../../public/google.png')}
            href={'/'}
        />
        <Button
            label={'Sign up with Facebook'}
            icon={require('../../public/facebook.png')}
            href={'/'}
        />
    </View>)
}

const styles = StyleSheet.create({
    signin: {
        flex: 1
    }
})

export default Signin