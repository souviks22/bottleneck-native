import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfileView = ({ name, email, picture }) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.imagesection}>
                <Image source={picture} style={Styles.image} />
            </View>
            <View style={Styles.textsection}>
                <Text style={Styles.text}>{name}</Text>
                <Text>{email}</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 2,
        marginBottom: 10,
        borderRadius: 11,
        width: '100%'
    },
    imagesection: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: "hidden",
        borderWidth: 2,
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
        fontSize: 30
    }
}
)

export default ProfileView