import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { colors } from "../../../colors"
import Helper from "../ui/Helper"

const Header = () => {
    return (<View style={styles.header}>
        <Text style={styles.signin}>Sign in</Text>
        <View style={styles.helper}>
            <Helper label={'New user?'} />
            <TouchableOpacity>
                <Text style={styles.signup}> Create an account</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    header: {
        marginVertical: 30
    },
    signin: {
        color: colors.dark,
        fontSize: 25,
        fontWeight: 'bold'
    },
    signup: {
        color: colors.blue,
        fontSize: 15
    },
    helper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Header