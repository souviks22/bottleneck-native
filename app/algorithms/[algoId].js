import { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { Entypo } from "@expo/vector-icons"
import { useHttp } from "../../hooks/use-http"
import { useAsync } from "../../hooks/use-async"
import { colors } from "../../colors"

import Container from "../../components/lib/Container"
import Visualiser from "../../components/algorithms/Visualiser"
import Tag from "../../components/algorithms/Tag"
import Section from "../../components/algorithms/Section"
import Recommendation from "../../components/algorithms/Recommendation"

const Algorithm = () => {
    const catchAsync = useAsync()
    const { algoId } = useLocalSearchParams()
    const [httpRequest, isLoading] = useHttp()
    const [algorithm, setAlgorithm] = useState({})
    const [field, setField] = useState({})

    useEffect(() => {
        catchAsync(async () => {
            const { algorithm, field } = await httpRequest(`/algorithms/${algoId}`)
            setAlgorithm(algorithm)
            setField(field)
        })()
    }, [])

    return (<Container isLoading={isLoading || !algorithm || !field}>
        <Visualiser id={algorithm.media} />
        <View style={styles.container}>
            <Text style={styles.title}>{algorithm.name}</Text>
            <View style={styles.tags}>
                <Tag label={field.name} />
                <Tag label={field.level} />
                <Tag label={algorithm.difficulty} />
            </View>
            <Section title={'Brief'} icon={<Entypo name="text" size={20} color={colors.dark} />}>
                <View style={styles.description}>
                    <Text style={styles.descText}>{algorithm.description}</Text>
                </View>
            </Section>
            <Section title={'Recommended'} icon={<Entypo name="colours" size={20} color={colors.dark} />}>
                <View style={styles.recommended}>
                    {field.algorithms && field.algorithms.map(algo =>
                        (algo != algoId) ? < Recommendation key={algo} algoId={algo} /> : null
                    )}
                </View>
            </Section>
        </View>
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
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
        marginVertical: 5
    },
    descText: {
        color: colors.dark,
        lineHeight: 20
    },
    recommended: {
        marginVertical: 5,
        borderRadius: 5,
        overflow: 'hidden'
    }
})

export default Algorithm