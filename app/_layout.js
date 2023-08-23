import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native"
import { Slot } from "expo-router"
import { Provider } from "react-redux"
import { colors } from "../colors"

import store from "../store"

const Layout = () => {
    return (<Provider store={store}>
        <StatusBar barStyle={'dark-content'} />
        <SafeAreaView style={styles.safe}>
            <View style={styles.container}>
                <Slot />
            </View>
        </SafeAreaView>
    </Provider>)
}

const styles = StyleSheet.create({
    safe: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        backgroundColor: colors.primary
    }
})

export default Layout