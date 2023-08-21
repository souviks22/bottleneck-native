import { Text, StyleSheet } from "react-native"
import { colors } from "../colors"

const Home = () => {
    
    return (<Text style={styles.test}>Hello World</Text>)
}

const styles = StyleSheet.create({
    test: {
        color: colors.dark
    }
})

export default Home