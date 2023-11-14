import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { Feather } from '@expo/vector-icons'
import { colors } from "../../colors"

const hours = new Date().getHours()

const Header = ({ name = 'Pal', image }) => {
    const router = useRouter()
    return (<View>
        <View style={styles.nav}>
            <Image style={styles.logo} source={require('../../public/splash.png')} />
            <View style={styles.right}>
                <TouchableOpacity style={styles.search}>
                    <Feather name="search" size={20} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/profile')}>
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
        paddingVertical: 10
    },
    tagline: {
        color: colors.dark
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
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