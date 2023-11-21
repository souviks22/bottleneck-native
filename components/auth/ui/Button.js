import { useRouter } from "expo-router"
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors } from "../../../colors"

const Button = ({ label, icon, href, handler = () => { }, blue = false, blueLabel = false }) => {
    const router = useRouter()
    const linkHandler = () => {
        if (href) router.push(href)
        handler()
    }

    return (<TouchableOpacity
        onPress={linkHandler}
        style={{
            ...styles.button,
            backgroundColor: blue ? colors.blue : colors.primary,
            borderColor: blue ? colors.primary : colors.dark
        }}>
        {icon && <Image
            style={styles.icon}
            source={icon}
        />}
        <Text style={{
            ...styles.label,
            color: blue ? colors.primary : blueLabel ? colors.blue : colors.dark
        }}>{label}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 50,
        borderWidth: 0.5,
        marginBottom: 15
    },
    icon: {
        height: 25,
        width: 25,
        marginHorizontal: 15
    },
    label: {
        fontSize: 17
    }
})

export default Button