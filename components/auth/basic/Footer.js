import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Footer = () => {
    return (<View style={styles.footer}>
        <Text style={styles.plain}>By signing up, you agree to the </Text>
        <TouchableOpacity>
            <Text style={styles.highlighted}>Terms of Service</Text>
        </TouchableOpacity>
        <Text style={styles.plain}> and </Text>
        <TouchableOpacity>
            <Text style={styles.highlighted}>Privacy Policy,</Text>
        </TouchableOpacity>
        <Text style={styles.plain}> including </Text>
        <TouchableOpacity>
            <Text style={styles.highlighted}>Cookie Use.</Text>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        position: 'absolute',
        bottom: 10,
        marginHorizontal: 20
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