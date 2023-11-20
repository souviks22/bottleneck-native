import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from "../../colors";
const DropDown = ({ label, data, iseditAble, value }) => {
    const datalevel = [
        { label: 'Beginner', value: 'Beginner' },
        { label: 'Intermediate', value: 'Intermediate' },
        { label: 'Experienced', value: 'Experienced' },
        { label: 'Professional', value: 'Professional' },
    ];
    const [fieldvalue, setfieldValue] = useState(value);
    const [editMode, seteditMode] = useState(false);
    const handlefocus = () => {
        seteditMode(true)
    }
    const handleBlur = () => {
        seteditMode(false)
    }
    return (
        <View style={styles.container}>
            {fieldvalue && <Text style={[styles.labelOnTop, editMode && styles.editModeinput]}>{label}</Text>}
            <View style={[styles.fields, editMode && styles.editModeinput, !iseditAble && styles.noneditAble]}>
                <ScrollView><Dropdown
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={datalevel}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={label}
                    value={fieldvalue}
                    onChange={item => {
                        setfieldValue(item.value);
                    }}
                    onBlur={handleBlur}
                    onFocus={handlefocus}
                />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        position: 'relative'
    },
    editModeinput: {
        borderColor: colors.black,
        color: colors.black
    },
    labelOnTop: {
        position: 'absolute',
        left: 40,
        zIndex: 1,
        backgroundColor: "white",
        color: colors.grey
    },
    fields: {
        flexDirection: 'row',
        height: 60,
        borderColor: colors.grey,
        borderWidth: 2,
        marginBottom: 10,
        paddingLeft: 8,
        fontSize: 20,
        width: '100%',
        alignItems: 'center',
        borderRadius: 10,
        zIndex: 0
    },
    dropdown: {
        paddingLeft: 10,
        height: 60,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingRight: 10
    },
    placeholderStyle: {
        fontSize: 20,
    },
    selectedTextStyle: {
        fontSize: 20,
    },
    noneditAble: {
        color: colors.grey
    },
}
);

export default DropDown;