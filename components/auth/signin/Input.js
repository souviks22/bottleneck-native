import { useState, useRef } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Input = ({ label, onChange, secure = false }) => {
    const [isTyping, setIsTyping] = useState(false)
    const inputRef = useRef()
    const typingHandler = () => {
        setIsTyping(value => !value)
        if (isTyping) inputRef.current.blur()
        else inputRef.current.focus()
    }

    return (<View style={styles.input}>
        <Text style={styles.label}
            onPress={typingHandler}>
            {label}
        </Text>
        <TextInput
            ref={inputRef}
            style={{
                ...styles.text,
                height: isTyping ? 'auto' : 0,
                borderColor: isTyping ? colors.blue : colors.dark
            }}
            onChangeText={onChange}
            secureTextEntry={secure}
        />
    </View>)
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20
    },
    label: {
        color: colors.dark,
        fontSize: 17
    },
    text: {
        fontSize: 17,
        borderBottomWidth: 1,
        paddingVertical: 7
    }
})

export default Input