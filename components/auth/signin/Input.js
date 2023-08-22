import { useState } from "react"
import { View, Text, TextInput, StyleSheet } from "react-native"
import { colors } from "../../../colors"

const Input = ({ label, onChange, secure = false }) => {
    const [isTyping, setIsTyping] = useState(false)
    const typingHandler = () => setIsTyping(value => !value)

    return (<View style={styles.input}>
        <Text style={{
            ...styles.label,
            borderBottomWidth: isTyping ? 0 : 1,
            paddingBottom: isTyping ? 0 : 20
        }}
            onPress={typingHandler}>
            {label}
        </Text>
        {isTyping && <TextInput
            style={styles.text}
            onChangeText={onChange}
            secureTextEntry={secure}
        />}
    </View>)
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 20
    },
    label: {
        color: colors.dark,
        fontSize: 17,
        borderColor: colors.grey
    },
    text: {
        fontSize: 17,
        borderBottomWidth: 1,
        borderColor: colors.grey,
        paddingVertical: 7
    }
})

export default Input