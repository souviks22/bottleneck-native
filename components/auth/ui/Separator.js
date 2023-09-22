import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Separator = ({ top, bottom }) => {
    return (<View style={{
        ...styles.separator,
        marginTop: top ? `${top}%` : '8%',
        marginBottom: bottom ? `${bottom}%` : '8%'
    }}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
    </View>)
}

const styles = StyleSheet.create({
    separator: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    or: {
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    line: {
        height: 0.5,
        width: '40%',
        backgroundColor: colors.dark
    }
})

export default Separator