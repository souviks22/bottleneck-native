import { View, Text, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Header = () => {
    return (<View style={styles.header}>
        <Text style={styles.explore}>Explore now</Text>
        <Text style={styles.join}>Join BN today.</Text>
    </View>)
}

const styles = StyleSheet.create({
    header: {
        marginVertical: 30
    },
    explore: {
        color: colors.dark,
        fontSize: 50,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    join: {
        color: colors.dark,
        fontSize: 25
    }
})

export default Header