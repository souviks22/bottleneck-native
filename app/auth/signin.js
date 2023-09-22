import { View, StyleSheet } from "react-native"

import Container from "../../components/lib/Container"
import Header from "../../components/auth/signin/Header"
import Input from "../../components/auth/signin/Input"
import Poster from "../../components/auth/ui/Poster"
import Separator from "../../components/auth/ui/Separator"
import Button from "../../components/auth/ui/Button"

const Signin = () => {
    return (<Container>
        <Header />
        <Input label={'Email Address'} onChange={() => { }} />
        <Input label={'Password'} onChange={() => { }} secure />
        <View style={styles.actions}>
            <Button
                label={'Sign In'}
                href={'/'}
                blue
            />
        </View>
        <Separator top={4} />
        <Button
            label={'Sign In with Google'}
            icon={require('../../public/google.png')}
            href={'/'}
        />
        <Poster uri={require('../../public/signin.png')} />
    </Container>)
}

const styles = StyleSheet.create({
    actions: {
        marginTop: '5%'
    }
})

export default Signin