import { AntDesign } from '@expo/vector-icons';
import { router } from "expo-router";
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../colors";
import Container from "../../components/lib/Container";
import Header from "../../components/profile/Header";
import ProfileView from "../../components/profile/ProfileView";
import SignoutHandler from "../../components/profile/SignoutHandler";
const ProfilePage = () => {
    const [isOpen, setisOpen] = useState(false);
    function handleModal() {
        setisOpen(isOpen => !isOpen);
        console.log(isOpen);
    }
    return (
        <Container>
            <SignoutHandler />
            <Header />
            <View style={Styles.container}>

                <View style={Styles.ProfileView}><ProfileView name='Sourik Bhuiya' email="sourikbhuiya@gmail.com" picture={require("../../public/dummy.jpeg")} /></View>

                <TouchableOpacity
                    label={'Your Profile'}
                    onPress={() => router.push('/profile/details')}
                    style={Styles.ActionButton}>
                    <View style={Styles.leftpart}>
                        <AntDesign name="profile" size={15} color="black" style={Styles.icon} />
                        <Text style={Styles.buttonText}>Your Profile</Text>
                    </View>
                    <View style={Styles.rightpart}>
                        <AntDesign name="right" size={20} color="grey" style={Styles.right} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity label={'Your Profile'} onPress={handleModal} style={Styles.ActionButton}>
                    <View style={Styles.leftpart}>
                        <AntDesign name="poweroff" size={15} color="black" style={Styles.icon} />
                        <Text style={Styles.buttonText}>Sign Out</Text>
                    </View>
                    <View>
                        <AntDesign name="right" size={20} color="grey" style={Styles.right} />
                    </View>
                </TouchableOpacity>
            </View>
        </Container>
    )

}
const Styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    leftpart: {
        flexDirection: 'row'
    },

    ProfileView: {
        marginVertical: 30
    },

    icon: {
        padding: 7,
        backgroundColor: colors.smoke,
        borderRadius: 15,
        height: 30,
        width: 30,
        overflow: "hidden"
    },
    ActionButton: {
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        width: "100%",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 17,
        textAlign: 'center',
        paddingHorizontal: 10
    }


})
export default ProfilePage