import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { tabActions } from "../../store/tab-slice"
import { colors } from "../../colors"

const Tab = ({ id, label, level }) => {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.tab.currentTab) === id

    return (<TouchableOpacity
        onPress={() => dispatch(tabActions.changeTab(id))}
        style={{
            ...styles.tab,
            backgroundColor: isActive ? colors.blue : colors.dark,
            marginHorizontal: isActive ? 2 : 0
        }}
    >
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    tab: {
        justifyContent: 'center',
        width: 100,
        padding: 10,
        borderWidth: 1,
        borderLeftWidth: 0.7,
        borderRightWidth: 0.7,
        borderColor: colors.blue
    },
    label: {
        textAlign: 'center',
        color: colors.primary
    }
})

export default Tab