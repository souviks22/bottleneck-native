import { ImageBackground, StyleSheet, ActivityIndicator } from "react-native"
import Animated, { FadeInLeft } from "react-native-reanimated"

const Container = ({ style = {}, auth = false, isLoading, children }) => {
    return (<Animated.View
        entering={FadeInLeft.delay(100)}
        style={{ ...styles.container, paddingHorizontal: auth ? 20 : 0, }}
    >
        {auth ? children : isLoading ? <ActivityIndicator /> :
            <ImageBackground
                source={require('../../public/background.jpg')}
                resizeMode={'cover'}
                style={{ ...style, ...styles.background }}
            >
                {children}
            </ImageBackground>
        }
    </Animated.View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        height: '100%'
    }
})

export default Container