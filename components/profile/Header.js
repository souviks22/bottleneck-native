import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { colors } from '../../colors';

const Header = () => {
    return (<TouchableOpacity
        style={styles.header}
        onPress={() => router.back()}
    >
        <AntDesign name="arrowleft" size={25} />
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    header: {
        color: colors.dark,
        paddingTop: 20,
        paddingBottom: 10
    }
})

export default Header