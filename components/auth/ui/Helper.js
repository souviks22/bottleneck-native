import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { colors } from "../../../colors"

const Helper = ({ label, link, href = null, centered = false }) => {
    const router = useRouter()
    const linkHandler = () => {
        if (!href) return
        router.push(href)
    }

    return (<View style={{
        ...styles.helper,
        justifyContent: centered ? 'center' : 'flex-start'
    }}>
        <Text style={styles.label}>{label}</Text>
        {link &&
            <TouchableOpacity>
                <Text style={styles.link} onPress={linkHandler}>{` ${link}`}</Text>
            </TouchableOpacity>
        }
    </View>)
}

const styles = StyleSheet.create({
    helper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        color: colors.dark,
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 15
    },
    link: {
        color: colors.blue,
        fontSize: 15
    }
})

export default Helper