import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const ImageInput = ({ imageUri, sendUriToUseState }) => {
    useEffect(() => {
        askUserPermissions();
    })

    const handleChange = () => {
        if (!imageUri) selectImages();
        else Alert.alert("Delete", "Would you like to delete this image?", [
            { text: "Yes", onPress: () => sendUriToUseState(null) },
            { text: "No" }
        ])
    }
    const askUserPermissions = async () => {
        const result = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!result.granted) {
            alert("App needs permission to access photos");
        }
    }
    const selectImages = async () => {
        try {
            const getImages = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!getImages.cancelled) {
                sendUriToUseState(getImages.uri);
                console.log("uri selected below");
                console.log(getImages.uri);
            }

        } catch (error) {
            console.log("Error with upload", error);
        }
    }


    return (
        <TouchableWithoutFeedback onPress={handleChange}>
            <View style={styles.container}>
                {!imageUri && <MaterialIcons name="photo-camera" size={44} color="black" />}
                {imageUri && <Image style={{ width: "100%", height: "100%" }} source={{ uri: imageUri }} />}

            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 25,
        backgroundColor: colors.lightGrey,
        marginHorizontal: 0,

    },
})
export default ImageInput;