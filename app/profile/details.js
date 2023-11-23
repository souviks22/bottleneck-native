
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native"
import Container from "../../components/lib/Container"
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
                        <View style={Styles.namesection}>
                            <Fields label='First Name' style={Styles.share} iseditAble={true} value='Sourik' DataType='text' />
                            <Fields label='Last Name' style={Styles.share} iseditAble={true} value='Bhuiya' DataType='text' />
                        </View>
                        <Fields label='Email' iseditAble={false} value='sourikbhuiya@gmail.com' DataType='text' />
                        <Fields label='Phone Number' iseditAble={true} value='8617790162' DataType='number' />
                        <Fields label='Designation' iseditAble={true} value='Manager' DataType='text' />
                        <Fields label='Organisation' iseditAble={true} value='T.C.S' DataType='text' />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>


        </Container>


    )
}
const Styles = StyleSheet.create({
    namesection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    imagesection: {
        position: 'relative',
        marginBottom: 20,
        marginTop: 20
    }
})
export default Profile