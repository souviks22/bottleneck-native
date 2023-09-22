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
        <Separator />
        <Button
            label={'Sign In with Google'}
            icon={require('../../public/google.png')}
            href={'/'}
        />
        <Button
            label={'Sign In with Facebook'}
            icon={require('../../public/facebook.png')}
            href={'/'}
        />
        <Poster uri={require('../../public/signin.png')} />
    </Container>)
}

export default Signin