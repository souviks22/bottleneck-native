import { useState } from "react"
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { colors } from "../../colors"

import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated"

const Section = ({ title, icon, children }) => {
    const [open, setOpen] = useState(true)
    const displayChangeHandler = () => setOpen(open => !open)

    return (<View>
        <Pressable style={styles.section} onPress={displayChangeHandler}>
            <View style={styles.title}>
                {icon}
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <TouchableOpacity onPress={displayChangeHandler}>
                {open
                    ? <AntDesign name="up" size={18} color={colors.dark} />
                    : <AntDesign name="down" size={18} color={colors.dark} />
                }
            </TouchableOpacity>
        </Pressable>
        {open &&
            <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
                {children}
            </Animated.View>
        }
    </View>)
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 15,
        padding: 5
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        color: colors.dark,
        fontSize: 17,
        paddingHorizontal: 5
    }
})

export default Section