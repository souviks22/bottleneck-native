
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native"
import Container from "../../components/lib/Container"
import DropDown from "../../components/profile/DropDownField"
import Fields from "../../components/profile/Field"
import Header from "../../components/profile/Header"
import Imagefield from "../../components/profile/Imagefield"

const Profile = () => {
    return (
        <Container>
            <Header />
            <KeyboardAvoidingView keyboardVerticalOffset={0}>
                <ScrollView>
                    <View style={Styles.imagesection}>
                        <Imagefield initialImage={require("../../public/dummy.jpeg")} />
                    </View>
                    <View>
                        <Fields label='Name' iseditAble={true} value='Sourik Bhuiya' DataType='text' />
                        <Fields label='Email' iseditAble={false} value='sourikbhuiya@gmail.com' DataType='text' />
                        <Fields label='Phone Number' iseditAble={true} value='8617790162' DataType='number' />
                        <Fields label='D.O.B' iseditAble={true} value='2003-08-20' DataType='date' />
                        <DropDown label='Level' iseditAble={true}  value='Beginner' />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>


        </Container>
    )
}
const Styles = StyleSheet.create({
    imagesection: {
        position: 'relative',
        marginBottom: 20,
        marginTop: 10
    }
})
export default Profile