import { StyleSheet } from "react-native"
import Animated, { FadeInLeft } from "react-native-reanimated"

const Container = ({ style = {}, children }) => {
    return (<Animated.View
        entering={FadeInLeft.delay(100)}
        style={{ ...styles.container, ...style }}
    >
        {children}
    </Animated.View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Container