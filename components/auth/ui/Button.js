import { Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { colors } from "../../../colors"

const Button = ({ label, icon, href, blue = false, blueLabel = false }) => {
    const router = useRouter()
    const linkHandler = () => router.push(href)

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