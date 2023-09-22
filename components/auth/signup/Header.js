import { View, StyleSheet } from "react-native"

const Header = () => {
    return (<View style={styles.header}>
        <Text style={styles.signin}>Sign Up to BN</Text>
        <View style={styles.helper}>
            <Helper label={'New user?'} />
            <TouchableOpacity>
                <Text style={styles.signup}> Create an account</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

export default Header