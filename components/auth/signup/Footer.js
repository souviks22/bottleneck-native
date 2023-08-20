import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Footer = () => {
    return (<View style={styles.footer}>
        <Text style={styles.plain}>By signing up, you agree to the </Text>
        <Text style={styles.highlighted}>Terms of Service</Text>
        <Text style={styles.plain}> and </Text>
        <Text style={styles.highlighted}>Privacy Policy,</Text>
        <Text style={styles.plain}> including </Text>
        <Text style={styles.highlighted}>Cookie Use.</Text>
    </View>)
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        bottom: 0
    },
    plain: {
        color: colors.dark
    },
    highlighted: {
        color: colors.blue,
        textDecorationLine: 'underline'
    }
})

export default Footer