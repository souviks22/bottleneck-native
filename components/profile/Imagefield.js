import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
const Imagefield = ({ initialImage }) => {
    const [selectedImage, setSelectedImage] = useState(initialImage);
    const handleImagePress = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            console.log(result);

            if (!result.cancelled) {
                setSelectedImage(result);
            }
        } catch (error) {
            console.error('Error picking image:', error);
        }
    };

    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={handleImagePress}>
                <View style={Styles.imagecontainer}>
                    <Image source={selectedImage} style={Styles.image} />
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