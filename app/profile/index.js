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

    return (<Container style={styles.container}>
        <Header />
        <ProfileView name={name} email={user.email} picture={user.image} />
        <TouchableOpacity
            label={'Your Profile'}
            onPress={() => router.push('/profile/details')}
            style={styles.actionButton}>
            <View style={styles.left}>
                <AntDesign name="profile" size={15} color="black" style={styles.icon} />
                <Text style={styles.buttonText}>Your Profile</Text>
            </View>
            <AntDesign name="right" size={20} color="grey" style={styles.right} />
        </TouchableOpacity>
        <TouchableOpacity label={'Your Profile'} onPress={modalVisibilityHandler} style={styles.actionButton}>
            <View style={styles.left}>
                <AntDesign name="poweroff" size={15} color="black" style={styles.icon} />
                <Text style={styles.buttonText}>Sign Out</Text>
            </View>
            <AntDesign name="right" size={20} color="grey" style={styles.right} />
        </TouchableOpacity>
        <SignoutHandler isOpen={isOpen} closeModalHandler={modalVisibilityHandler} />
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        padding: 7,
        backgroundColor: colors.smoke,
        borderRadius: 15
    },
    actionButton: {
        backgroundColor: colors.primary,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: 10
    }
})

export default Profile