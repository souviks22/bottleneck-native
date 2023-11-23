import { router } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../colors";
const ProfileView = ({ name, email, picture }) => {
    return (
        
            <ImageBackground source={require("../../public/profile_background.jpg")} style={Styles.container}>


                <View style={Styles.imagesection}>
                    <Image source={picture} style={Styles.image} />
                </View>
                <View style={Styles.textsection}>
                    <Text style={Styles.text}>{name}</Text>
                    <Text style={Styles.email}>{email}</Text>
                    <TouchableOpacity onPress={() => router.push('/profile/details')}>
                    <Text style={Styles.view}>View more </Text>
                    </TouchableOpacity>
                </View>
            
            </ImageBackground>
    )
}

const Styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidt: 2,
        overflow: 'hidden',
        marginBottom: 10,
        borderRadius: 11,
        width: 'auto',
        elevation: 50
    },
    imagesection: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: "hidden",
        borderWidth: 1,
        alignItems: "center",
        marginVertical: 20,
        marginHorizontal: 10
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 40
    },
    textsection: {
        paddingVertical: 25,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 30,
        color: colors.yellow
    },
    email: {
        color: colors.blue
    },
    view :{
        color: colors.smoke,
        paddingVertical:10
    }
}
)

export default ProfileView