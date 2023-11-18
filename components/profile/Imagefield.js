import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
const Imagefield = ({ initialImage }) => {
    const [selectedImage, setSelectedImage] = useState(initialImage);
    const handleImagePress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            const uriParts = result.assets[0].uri.split('/');
            const fileName = uriParts[uriParts.length - 1];

            // Create a relative path based on the file name
            const relativePath = `${Platform.OS === 'ios' ? '' : 'file://'}${fileName}`;

            setSelectedImage(relativePath);
        }
    };
    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={handleImagePress}>
                <View style={Styles.imagecontainer}>
                    <Image source={selectedImage} style={Styles.Image} />
                </View>
            </TouchableOpacity>
        </View>
    )

}
const Styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imagecontainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: "hidden",
        borderWidth: 2,
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 75
    }
})
export default Imagefield;