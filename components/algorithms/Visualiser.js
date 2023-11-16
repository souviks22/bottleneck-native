import { useState } from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { catchAsync } from "../../errors/async"

import YoutubeIframe from "react-native-youtube-iframe"
import * as ScreenOrientation from "expo-screen-orientation"

const { PORTRAIT, LANDSCAPE } = ScreenOrientation.OrientationLock

const Visualiser = ({ id }) => {
    const [state, setState] = useState()
    const [orientation, setOrientation] = useState(PORTRAIT)
    const orientationChangeHandler = catchAsync(async () => {
        const current = (orientation === PORTRAIT) ? LANDSCAPE : PORTRAIT
        await ScreenOrientation.lockAsync(current)
        setOrientation(current)
    })

    return (<View>
        {!state && <ActivityIndicator />}
        <YoutubeIframe
            height={300}
            play={true}
            videoId={id}
            onChangeState={state => setState(state)}
            onFullScreenChange={orientationChangeHandler}
        />
    </View>)
}

const styles = StyleSheet.create({

})

export default Visualiser