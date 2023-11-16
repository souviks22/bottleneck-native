import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../colors"

const map = {
    Beginner: colors.green, Amateur: colors.yellow, Expert: colors.red,
    Easy: colors.green, Medium: colors.yellow, Hard: colors.red
}

const Tag = ({ label }) => {
    const color = map[label] || colors.grey
    return (<View style={{
        ...styles.container,
        borderColor: color,
        backgroundColor: color
    }}>
        <Text style={styles.label}>{label}</Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderRadius: 50,
        marginRight: 5
    },
    label: {
        color: colors.smoke,
        fontSize: 12,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 2
    }
})

export default Tag