import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../colors"

const Tag = ({ label }) => {
    return (<View style={styles.box}>
        <Text style={styles.tag}>{label}</Text>
    </View>)
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: colors.navy,
        paddingHorizontal: 10,
        paddingVertical: 2,
        backgroundColor: colors.navy
    },
    tag: {
        fontSize: 10,
        color: colors.primary
    }
})

export default Tag