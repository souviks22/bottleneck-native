import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Separator = () => {
    return (<View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
    </View>)
}

const styles = StyleSheet.create({
    separator: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30
    },
    or: {
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    line: {
        height: 1,
        width: '40%',
        backgroundColor: colors.dark
    }
})

export default Separator