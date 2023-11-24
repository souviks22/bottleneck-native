import { Entypo, Feather } from "@expo/vector-icons"
import { useRef, useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import { colors } from "../../colors"
import { useAsync } from "../../hooks/use-async"
import { useHttp } from "../../hooks/use-http"
import { userActions } from "../../store/user-slice"

const toDbField = label => {
    const split = label.split(' ').map(word => word.toLowerCase())
    return split.join('')
}

const Field = ({ label, dataType, isEditable, value }) => {
    const inputRef = useRef()
    const [isEditing, setIsEditing] = useState(false)
    const [fieldValue, setFieldValue] = useState(value)

    const handleFocus = () => setIsEditing(true)
    const handleBlur = () => setIsEditing(false)

    const catchAsync = useAsync()
    const dispatch = useDispatch()
    const [httpRequest] = useHttp()
    const { user } = useSelector(state => state.user)

    const handleSave = catchAsync(async () => {
        inputRef.current.blur()
        setIsEditing(false)
        const update = { [toDbField(label)]: fieldValue }
        const { user: updatedUser } = await httpRequest(`/users/${user._id}`, 'put', { update })
        dispatch(userActions.changeUser({ ...updatedUser, token: user.token }))
    })

    const handleCancel = () => {
        inputRef.current.blur()
        setIsEditing(false)
        setFieldValue(value)
    }

    return (<View style={styles.container}>
        {fieldValue && <Text style={[styles.labelOnTop, isEditing && styles.isEditinginput]}>{label}</Text>}
        <TouchableOpacity
            style={[styles.field, isEditable && isEditing && styles.isEditinginput, !isEditable && styles.noneditAble]}
            onPress={!isEditing ? handleFocus : handleBlur} disabled={!isEditable || isEditing ? true : false}
        >
            <TextInput style={styles.inputField}
                ref={inputRef}
                placeholder={label}
                value={fieldValue}
                onChangeText={(text) => setFieldValue(text)}
                onFocus={handleFocus}
                keyboardType={dataType === 'number' ? 'numeric' : 'default'}
                onBlur={handleBlur}
                editable={isEditable}>
            </TextInput>
            {isEditable && isEditing &&
                <View style={styles.action}>
                    <TouchableOpacity style={styles.save} onPress={handleSave}>
                        <Feather name="check" size={20} color={colors.dark} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancel} onPress={handleCancel}>
                        <Entypo name="cross" size={20} color={colors.dark} />
                    </TouchableOpacity>
                </View>
            }
        </TouchableOpacity>
        {!isEditable && <Text style={styles.warning}>*This field can't be edited.</Text>}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    labelOnTop: {
        position: 'absolute',
        top: -2,
        left: 30,
        zIndex: 10,
        color: colors.grey,
        backgroundColor: colors.smoke,
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary,
        fontSize: 20,
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: colors.grey,
        padding: 5,
    },
    inputField: {
        fontSize: 17,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    isEditinginput: {
        borderColor: colors.black,
        color: colors.black
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        zIndex: 2
    },
    save: {
        padding: 5,
        paddingVertical: 10
    },
    cancel: {
        padding: 5,
        paddingVertical: 10
    },
    noneditAble: {
        color: colors.grey
    },
    warning: {
        color: colors.yellow,
        paddingLeft: 10,
        paddingTop: 5
    }
})

export default Field