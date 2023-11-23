import { Pressable, Text, Modal, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { MaterialIcons } from "@expo/vector-icons"
import { errorActions } from "../../store/error-slice"
import { colors } from "../../colors"

const ErrorHandler = () => {
    const dispatch = useDispatch()
    const { error } = useSelector(state => state.error)
    const modalCloseHandler = () => dispatch(errorActions.clearError())

    return (<Modal
        animationType={'fade'}
        visible={error != null}
        onRequestClose={modalCloseHandler}
        transparent
    >
        <Pressable style={styles.modal} onPress={modalCloseHandler}>
            <MaterialIcons name="error" size={100} color={colors.red} />
            <Text style={styles.message}>{error}</Text>
        </Pressable>
    </Modal>)
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark + 'aa'
    },
    message: {
        color: colors.primary,
        backgroundColor: colors.red,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10
    }
})

export default ErrorHandler