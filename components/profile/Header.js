
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from '../../colors';

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={Styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" style={Styles.backbutton} />
            </TouchableOpacity>
            <Text style={Styles.intro}> Your Profile </Text>
        </View>)
}

const Styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        marginTop: 15,
        marginLeft: 20,
        color: colors.dark
    },
    backbutton: {
        fontSize: 20,
        padding: 2,
        backgroundColor: colors.primary
    },
    intro: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Header