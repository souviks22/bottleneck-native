import { Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Helper = ({ label }) => {
    return (<Text style={styles.helper}>{label}</Text>)
}

const styles = StyleSheet.create({
    helper: {
        color: colors.dark,
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 15
    }
})

export default Helper