import { ScrollView, StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"

import Container from "../../components/lib/Container"
import Field from "../../components/profile/Field"
import Header from "../../components/profile/Header"
import Imagefield from "../../components/profile/Imagefield"

const Details = () => {
    const { user } = useSelector(state => state.user)
    return (<Container style={styles.container}>
        <Header />
        <Imagefield image={user.image} />
        <ScrollView>
            <View style={styles.nameSection}>
                <Field label='First Name' style={styles.share} isEditable={true} value={user.firstname || 'Not Set'} dataType='text' />
                <Field label='Last Name' style={styles.share} isEditable={true} value={user.lastname || 'Not Set'} dataType='text' />
            </View>
            <Field label='Email' isEditable={false} value={user.email || 'Not Set'} dataType='text' />
            <Field label='Phone' isEditable={true} value={user.phone || 'Not Set'} dataType='number' />
            <Field label='Designation' isEditable={true} value={user.designation || 'Not Set'} dataType='text' />
            <Field label='Organization' isEditable={true} value={user.organization || 'Not Set'} dataType='text' />
        </ScrollView>
    </Container>)
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    nameSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Details