import React, { useEffect } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from '@expo/vector-icons';


import { TouchableHighlight } from 'react-native-gesture-handler';

const ImageInputP = ({ imageURI, sendDataToParent }) => {

    async function getPermission() {
        try {
            const result = await ImagePicker.requestCameraRollPermissionsAsync();
            if (!result.granted) alert("App needs permission to access photos. Change user settings to allow permission");

        } catch (error) {
            console.log("Error occured", error);
        }
    }
    const handleChange = () => {
        if (!imageURI) {
            selectImage();

        } else {
            Alert.alert("Delete", "Would you like to delete photo ?", [
                { text: "Yes", onPress: () => sendDataToParent(null) },
                { text: "No" },
            ])
        }

    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) {
                sendDataToParent(result.uri);
                console.log("uri selected")
                console.log(result.uri)
            }

        } catch (error) {
            console.log("Error occured while launching your photo library", error);
        }
    }

    useEffect(() => {
        getPermission();
    }, [])
    return (
        <TouchableHighlight style={styles.touch} underlayColor="#DCDCDC" onPress={handleChange}>
            <View style={styles.container}>
                {imageURI && <Image style={styles.image} source={{ uri: imageURI }} />}
                {!imageURI && <MaterialIcons name="photo-camera" size={50} color="black" />}
            </View>



        </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DCDCDC",
        borderRadius: 25,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width: 100,
    },
    image: {
        width: 100,
        height: 100
    },
    touch: {
        height: 100,
        width: 100,
        borderRadius: 25,
    },
})
export default ImageInputP;