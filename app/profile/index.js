
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../colors";
import Container from "../../components/lib/Container";
import Header from "../../components/profile/Header";
import ProfileView from "../../components/profile/ProfileView";
const ProfilePage = () => {

    return (
        <Container>
            <Header />
            <View style={Styles.container}>

                <View style={Styles.ProfileView}><ProfileView name='Sourik Bhuiya' email="sourikbhuiya@gmail.com" picture={require("../../public/dummy.jpeg")} /></View>

                <TouchableOpacity label={'Your Profile'} onPress={() => router.push('/profile/profile')} style={Styles.ProfileButton}><Text style={Styles.buttonText}>Your Profile</Text></TouchableOpacity>
                <TouchableOpacity label={'Your Profile'} onPress={() => router.push('/auth')} style={Styles.SignOutButton}><Text style={Styles.buttonText}>Sign Out</Text></TouchableOpacity>
            </View>
        </Container>
    )

}
const Styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    ProfileView: {
        marginVertical: 30
    },
    ProfileButton: {
        backgroundColor: colors.green,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: "100%",
        alignItems: "center"
    },
    SignOutButton: {
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: "100%",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 20
    }


})
export default ProfilePage