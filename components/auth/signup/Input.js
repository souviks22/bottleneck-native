import { useState, useRef } from "react"
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from "../../../colors"

const Input = ({ label, onChange, secure = false }) => {
    const inputRef = useRef()
    const [isTyping, setIsTyping] = useState(false)
    const [visible, setVisible] = useState(!secure)

    const typingHandler = () => {
        if (isTyping) return
        setIsTyping(true)
        inputRef.current.focus()
    }

    const visibilityHandler = () => {
        setVisible(value => !value)
    }

    return (<View style={styles.input}>
        <Text style={styles.label} onPress={typingHandler}>{label}</Text>
        <View style={{
            ...styles.inputGroup,
            elevation: isTyping ? 5 : 0,
            shadowOpacity: isTyping ? 0.5 : 0
        }}>
            <TextInput
                ref={inputRef}
                style={styles.text}
                onChangeText={onChange}
                onPressOut={typingHandler}
                onBlur={() => setIsTyping(false)}
                secureTextEntry={!visible}
            />
            {secure &&
                <TouchableOpacity style={styles.visibility} onPress={visibilityHandler}>
                    {visible
                        ? <MaterialIcons name="visibility" size={24} color={colors.dark} />
                        : <MaterialIcons name="visibility-off" size={24} color={colors.dark} />
                    }
                </TouchableOpacity>
            }
        </View>

    </View>)
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10
    },
    label: {
        color: colors.dark,
        fontSize: 15,
        paddingBottom: 15
    },
    inputGroup: {
        backgroundColor: colors.smoke,
        borderRadius: 7,
        shadowColor: colors.blue,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowRadius: 0.1
    },
    text: {
        padding: 10,
        fontSize: 15,
        borderWidth: 0.5,
        borderRadius: 7
    },
    visibility: {
        position: 'absolute',
        right: '2%',
        top: '20%'
    }
})

export default Input