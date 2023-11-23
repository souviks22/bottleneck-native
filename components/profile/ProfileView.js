import { Image, ImageBackground, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { router } from "expo-router";
import { colors } from "../../colors";

const ProfileView = ({ name, email, picture }) => {
    return (<ImageBackground
        source={require("../../public/profile_background.jpg")}
        style={styles.profileView}
    >
        <View style={styles.top}>
            <Image source={{ uri: picture }} style={styles.image} />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => router.push('/profile/details')}>
            <Text style={styles.view}>View more</Text>
        </TouchableOpacity>
    </ImageBackground>)
}

const styles = StyleSheet.create({
    profileView: {
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 40
    },
    top: {
        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 15
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 15
    },
    name: {
        color: colors.primary,
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    email: {
        color: colors.grey
    },
    view: {
        color: colors.smoke,
        textAlign: 'center',
        padding: 20
    }
})

export default ProfileView