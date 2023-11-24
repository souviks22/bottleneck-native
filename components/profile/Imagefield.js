import { useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useAsync } from "../../hooks/use-async";

import * as ImagePicker from "expo-image-picker";

const Imagefield = ({ image }) => {
    const catchAsync = useAsync()
    const [selectedImage, setSelectedImage] = useState(image)

    const handleImagePress = catchAsync(async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        if (!result.canceled) {
            setSelectedImage(result)
        }
    })

    return (<View style={styles.container}>
        <TouchableOpacity onPress={handleImagePress}>
            <Image
                source={{ uri: selectedImage }}
                style={styles.image}
            />
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 40
    },
    image: {
        width: 150,
        height: 150
    }
})

export default Imagefield