import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"

import Container from "../../components/lib/Container"
import Fields from "../../components/profile/Field"
import Header from "../../components/profile/Header"
import Imagefield from "../../components/profile/Imagefield"

const Profile = () => {
    const { user } = useSelector(state => state.user)
    return (<Container>
        <Header />
        <KeyboardAvoidingView keyboardVerticalOffset={0}>
            <ScrollView>
                <View style={Styles.imagesection}>
                    <Imagefield initialImage={user.image} />
                </View>
                <View>
                    <View style={Styles.namesection}>
                        <Fields label='First Name' style={Styles.share} iseditAble={true} value={user.firstname || 'Not Set'} DataType='text' />
                        <Fields label='Last Name' style={Styles.share} iseditAble={true} value={user.lastname || 'Not Set'} DataType='text' />
                    </View>
                    <Fields label='Email' iseditAble={false} value={user.email || 'Not Set'} DataType='text' />
                    <Fields label='Phone Number' iseditAble={true} value={user.phone || 'Not Set'} DataType='number' />
                    <Fields label='Designation' iseditAble={true} value={user.designation || 'Not Set'} DataType='text' />
                    <Fields label='Organisation' iseditAble={true} value={user.organisation || 'Not Set'} DataType='text' />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    </Container>)
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