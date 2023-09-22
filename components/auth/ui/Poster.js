import { Image, StyleSheet } from "react-native"

const Poster = ({ uri }) => {
    return (<Image
        style={styles.image}
        source={uri}
        resizeMode={'contain'}
    />)
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '40%'
    }
})

export default Poster