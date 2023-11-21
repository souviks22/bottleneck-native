import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter, useNavigation } from "expo-router"
import { Feather } from '@expo/vector-icons'
import { colors } from "../../colors"
import { catchAsync } from "../../errors/async"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"

const hours = new Date().getHours()
const { tokenKey, idKey } = Constants.expoConfig.extra

const Header = ({ name = 'Pal', image }) => {
    const router = useRouter()
    const navigator = useNavigation()

    const signoutHandler = catchAsync(async () => {
        await AsyncStorage.removeItem(tokenKey)
        await AsyncStorage.removeItem(idKey)
        navigator.reset({ index: 0, routes: [{ name: 'index' }] })
    })

    return (<View>
        <View style={styles.nav}>
            <Image style={styles.logo} source={require('../../public/splash.png')} />
            <View style={styles.right}>
                <TouchableOpacity style={styles.search}>
                    <Feather name="search" size={20} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={signoutHandler}>
                    <Image style={styles.profile} source={{ uri: image }} />
                </TouchableOpacity>
            </View>
        </View>
        <Text style={styles.greeting}>Good {hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening'}, {name}</Text>
        <Text style={styles.tagline}>Welcome to the exciting realm of Data Structures and Algorithms! 🌟</Text>
    </View>)
}

const styles = StyleSheet.create({
    greeting: {
        color: colors.dark,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10
    },
    tagline: {
        color: colors.dark,
        paddingHorizontal: 15
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    logo: {
        height: 42,
        width: 40
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '22%'
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 50
    },
    search: {
        backgroundColor: colors.dark,
        borderRadius: 50,
        padding: 3
    }
})

export default Header