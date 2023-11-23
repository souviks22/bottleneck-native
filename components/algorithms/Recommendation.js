import { useState, useEffect } from "react"
import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import { AntDesign } from "@expo/vector-icons"
import { useHttp } from "../../hooks/use-http"
import { useAsync } from "../../hooks/use-async"
import { colors } from "../../colors"

const Recommendation = ({ algoId }) => {
    const router = useRouter()
    const catchAsync = useAsync()
    const [algo, setAlgo] = useState({})
    const [httpRequest] = useHttp()

    useEffect(() => {
        catchAsync(async () => {
            const { algorithm } = await httpRequest(`/algorithms/${algoId}`)
            setAlgo(algorithm)
        })()
    }, [])

    return (<TouchableOpacity
        style={styles.recommendation}
        onPress={() => router.push(`/algorithms/${algoId}`)}
    >
        <AntDesign name="right" size={12} color={colors.dark} />
        <Text style={styles.name}>{algo.name}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    recommendation: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomWidth: 0.5
    },
    name: {
        paddingHorizontal: 10
    }
})

export default Recommendation