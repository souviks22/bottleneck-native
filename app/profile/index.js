import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../../colors";

import Container from "../../components/lib/Container";
import Header from "../../components/profile/Header";
import ProfileView from "../../components/profile/ProfileView";
import SignoutHandler from "../../components/profile/SignoutHandler";

const Profile = () => {
    const { user } = useSelector(state => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const modalVisibilityHandler = () => setIsOpen(isOpen => !isOpen);
    const name = user.firstname ? user.firstname : 'Complete Profile'

    return (<Container>
        <Header />
        <View style={Styles.container}>
            <View style={Styles.profileView}>
                <ProfileView name={name} email={user.email} picture={user.image} />
            </View>
            <TouchableOpacity
                label={'Your Profile'}
                onPress={() => router.push('/profile/details')}
                style={Styles.actionButton}>
                <View style={Styles.leftpart}>
                    <AntDesign name="profile" size={15} color="black" style={Styles.icon} />
                    <Text style={Styles.buttonText}>Your Profile</Text>
                </View>
                <View style={Styles.rightpart}>
                    <AntDesign name="right" size={20} color="grey" style={Styles.right} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity label={'Your Profile'} onPress={modalVisibilityHandler} style={Styles.actionButton}>
                <View style={Styles.leftpart}>
                    <AntDesign name="poweroff" size={15} color="black" style={Styles.icon} />
                    <Text style={Styles.buttonText}>Sign Out</Text>
                </View>
                <View>
                    <AntDesign name="right" size={20} color="grey" style={Styles.right} />
                </View>
            </TouchableOpacity>
        </View>
        <SignoutHandler isOpen={isOpen} closeModalHandler={modalVisibilityHandler} />
    </Container>)
}

const Styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    leftpart: {
        flexDirection: 'row'
    },
    profileView: {
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
    actionButton: {
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

export default Profile