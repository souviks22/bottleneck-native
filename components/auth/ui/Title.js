import { Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Title = ({ label }) => {
    return (<Text style={styles.title}>{label}</Text>)
}

const styles = StyleSheet.create({
    title: {
        color: colors.dark,
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Title