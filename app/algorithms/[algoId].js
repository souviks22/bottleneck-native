import { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useHttp } from "../../hooks/use-http"
import { catchAsync } from "../../errors/async"

import Container from "../../components/lib/Container"
import Visualiser from "../../components/algorithms/Visualiser"

const Algorithm = () => {
    const { algoId } = useLocalSearchParams()
    const { httpRequest, isLoading } = useHttp()
    const [algorithm, setAlgorithm] = useState()

    useEffect(() => {
        catchAsync(async () => {
            const { algorithm } = await httpRequest(`/algorithms/${algoId}`)
            setAlgorithm(algorithm)
        })()
    }, [])

    return (<Container>
        {isLoading || !algorithm ? <ActivityIndicator /> :
            <>
                <Text>{algoId}</Text>
                <Visualiser id={algorithm.media} />
            </>
        }
    </Container>)
}

const styles = StyleSheet.create({

})

export default Algorithm