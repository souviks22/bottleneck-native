import { useState, useRef } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Input = ({ label, onChange, secure = false }) => {
    const inputRef = useRef()
    const [isTyping, setIsTyping] = useState(false)
    const [value, setValue] = useState()

    const typingHandler = () => {
        if (value) return
        setIsTyping(value => !value)
        if (isTyping) inputRef.current.blur()
        else inputRef.current.focus()
    }

    const textChangeHandler = value => {
        setValue(value)
        onChange(value)
    }

    const blurHandler = () => {
        if (!value) setIsTyping(false)
    }

    return (<View style={styles.input}>
        <Text style={styles.label} onPress={typingHandler}>{label}</Text>
        <TextInput
            ref={inputRef}
            style={{
                ...styles.text,
                height: isTyping ? 'auto' : 0,
                borderColor: isTyping ? colors.blue : colors.dark
            }}
            onChangeText={textChangeHandler}
            onBlur={blurHandler}
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
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 7
    },
    text: {
        fontSize: 15,
        borderBottomWidth: 0.5,
        paddingBottom: 7
    }
})

export default Input