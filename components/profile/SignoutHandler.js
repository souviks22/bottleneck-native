import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native"
import { useNavigation } from "expo-router"
import { useAsync } from "../../hooks/use-async"
import { colors } from "../../colors"

import Constants from "expo-constants"
import AsyncStorage from "@react-native-async-storage/async-storage"

const { tokenKey, idKey } = Constants.expoConfig.extra

const SignoutHandler = ({ isOpen, closeModalHandler = () => { } }) => {
    const navigator = useNavigation()
    const catchAsync = useAsync()

    const signoutHandler = catchAsync(async () => {
        await AsyncStorage.removeItem(tokenKey)
        await AsyncStorage.removeItem(idKey)
        navigator.reset({ index: 0, routes: [{ name: 'index' }] })
    })

    return (<Modal
        visible={isOpen}
        onRequestClose={closeModalHandler}
        transparent
    >
        <View style={styles.background}>
            <View style={styles.box}>
                <Text style={styles.caution}>Are you sure?</Text>
                <TouchableOpacity onPress={signoutHandler}>
                    <Text style={styles.signout}>Sign out</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={closeModalHandler}>
                    <Text style={styles.cancel}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>)
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.dark + '80',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: '85%',
        backgroundColor: colors.primary,
        borderRadius: 8
    },
    caution: {
        fontSize: 20,
        textAlign: 'center',
        padding: 15,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomColor: colors.grey
    },
    signout: {
        fontSize: 15,
        textAlign: 'center',
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.grey,
        color: colors.red
    },
    cancel: {
        fontSize: 15,
        textAlign: 'center',
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.grey,
        color: colors.grey
    }
})

export default SignoutHandler