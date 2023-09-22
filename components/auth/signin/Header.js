import { View, StyleSheet } from "react-native"

import Title from "../ui/Title"
import Helper from "../ui/Helper"

const Header = () => {
    return (<View style={styles.header}>
        <Title label={'Sign In'} />
        <Helper
            label={'New user?'}
            link={'Create an account'}
            href={'/auth/signup'}
        />
    </View>)
}

const styles = StyleSheet.create({
    header: {
        marginVertical: '7%'
    }
})

export default Header