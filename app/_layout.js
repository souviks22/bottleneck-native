import { View, StyleSheet, StatusBar } from "react-native"
import { Slot } from "expo-router"
import { colors } from "../colors"

const Layout = () => {
    return (<View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Slot />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.primary
    }
})

export default Layout