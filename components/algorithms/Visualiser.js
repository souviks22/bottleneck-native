import { useState, useEffect } from "react"
import { View, ActivityIndicator, BackHandler } from "react-native"
import { useAsync } from "../../hooks/use-async"

import YoutubeIframe from "react-native-youtube-iframe"
import * as ScreenOrientation from "expo-screen-orientation"

const { PORTRAIT, LANDSCAPE } = ScreenOrientation.OrientationLock

const Visualiser = ({ id }) => {
    const catchAsync = useAsync()
    const [state, setState] = useState()
    const [orientation, setOrientation] = useState(PORTRAIT)
    const orientationChangeHandler = catchAsync(async () => {
        const current = (orientation === PORTRAIT) ? LANDSCAPE : PORTRAIT
        await ScreenOrientation.lockAsync(current)
        setOrientation(current)
    })

    useEffect(() => {
        const portraitHandler = catchAsync(async () => {
            if (orientation === PORTRAIT) return false
            await ScreenOrientation.lockAsync(PORTRAIT)
            setOrientation(PORTRAIT)
            return true
        })
        BackHandler.addEventListener('hardwareBackPress', portraitHandler)
        return () => BackHandler.removeEventListener('hardwareBackPress', portraitHandler)
    }, [])

    return (<View>
        {!state && <ActivityIndicator />}
        <YoutubeIframe
            play
            height={220}
            videoId={id}
            onChangeState={state => setState(state)}
            onFullScreenChange={orientationChangeHandler}
        />
    </View>)
}

export default Visualiser