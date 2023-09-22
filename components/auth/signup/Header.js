import { View, StyleSheet } from "react-native"

import Title from "../ui/Title"

const Header = () => {
    return (<View style={styles.header}>
        <Title label={'Sign Up to BN'} />
    </View>)
}

const styles = StyleSheet.create({
    header: {
        marginBottom: '7%'
    }
})

export default Header