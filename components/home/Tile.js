import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { Feather } from "@expo/vector-icons"
import { colors } from "../../colors"

import Tag from "./Tag"

const Tile = ({ id, name, difficulty }) => {
    const router = useRouter()
    return (<View style={styles.tile}>
        <View style={styles.line}>
            <Tag label={difficulty} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <View style={{ ...styles.line, ...styles.linkBox }}>
            <TouchableOpacity style={styles.link} onPress={() => router.push(`/algorithms/${id}`)}>
                <Feather name="external-link" size={15} color={colors.primary} />
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    tile: {
        width: '50%',
        height: 200,
        backgroundColor: colors.blue,
        padding: 10,
        borderBottomWidth: 0.7,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: colors.navy,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        paddingVertical: 10
    },
    line: {
        flexDirection: 'row',
        width: '100%'
    },
    link: {
        borderWidth: 0.5,
        borderRadius: 50,
        borderColor: colors.navy,
        padding: 5,
        backgroundColor: colors.navy
    },
    linkBox: {
        justifyContent: 'flex-end'
    }
})

export default Tile