import { useState, useEffect } from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useHttp } from "../../hooks/use-http"
import { catchAsync } from "../../errors/async"

import Container from "../../components/lib/Container"
import Visualiser from "../../components/algorithms/Visualiser"

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
                <Text>{algorithm.name}</Text>
                <Text>{field.name}</Text>
            </>
        }
    </Container>)
}

const styles = StyleSheet.create({

})

export default Algorithm