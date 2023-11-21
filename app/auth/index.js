import { View, StyleSheet } from "react-native"

import Container from "../../components/lib/Container"
import Header from "../../components/auth/basic/Header"
import Button from "../../components/auth/ui/Button"
import Separator from "../../components/auth/ui/Separator"
import Helper from "../../components/auth/ui/Helper"
import Footer from "../../components/auth/basic/Footer"

const Auth = () => {
    return (<Container style={styles.container}>
        <Header />
        <Button
            label={'Sign Up with Google'}
            icon={require('../../public/google.png')}
            href={'/'}
        />
        <Button
            label={'Sign Up with Facebook'}
            icon={require('../../public/facebook.png')}
            href={'/'}
        />
        <Separator />
        <Button
            label={'Create Account'}
            href={'/auth/signup'}
            blue
        />
        <View style={styles.alter}>
            <Helper label={'Already have an account?'} centered />
            <Button
                label={'Sign In'}
                href={'/auth/signin'}
                blueLabel
            />
        </View>
        <Footer />
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    alter: {
        marginTop: 30
    }
})

export default Auth