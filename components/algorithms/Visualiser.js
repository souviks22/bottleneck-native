import { View, Text, StyleSheet } from "react-native"
import YoutubeIframe from "react-native-youtube-iframe"

const Visualiser = ({ id }) => {
    return (<View>
        <YoutubeIframe height={300} play={true} videoId={id} />
    </View>)
}

const styles = StyleSheet.create({

})

export default Visualiser