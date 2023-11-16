import { useState, useEffect } from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useHttp } from "../../hooks/use-http"
import { catchAsync } from "../../errors/async"
import { colors } from "../../colors"

import Container from "../../components/lib/Container"
import Visualiser from "../../components/algorithms/Visualiser"
import Tag from "../../components/algorithms/Tag"

const Algorithm = () => {
    const { algoId } = useLocalSearchParams()
    const [httpRequest, isLoading] = useHttp()
    const [algorithm, setAlgorithm] = useState()
    const [field, setField] = useState()

    useEffect(() => {
        catchAsync(async () => {
            const { algorithm, field } = await httpRequest(`/algorithms/${algoId}`)
            setAlgorithm(algorithm)
            setField(field)
        })()
    }, [])

    return (<Container>
        {isLoading || !algorithm || !field ? <ActivityIndicator /> :
            <>
                <Visualiser id={algorithm.media} />
                <View style={styles.container}>
                    <Text style={styles.title}>{algorithm.name}</Text>
                    <View style={styles.tags}>
                        <Tag label={field.name} />
                        <Tag label={field.level} />
                        <Tag label={algorithm.difficulty} />
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descText}>{algorithm.description}</Text>
                    </View>
                </View>
            </>
        }
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    title: {
        fontSize: 30,
        paddingVertical: 10
    },
    tags: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    description: {
        backgroundColor: colors.smoke,
        padding: 10,
        borderRadius: 10
    },
    descText: {
        color: colors.dark,
        lineHeight: 20
    }
})

export default Algorithm