import React, { useState, useEffect, } from 'react';
import { Alert, StyleSheet, TextInput, View, Text, Button, Image, FlatList, Modal, TouchableWithoutFeedback, TouchableHighlightComponent } from 'react-native';
import * as  ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Screen from '../Screen';



const ImagePickerP = ({ getUri, sendUriToParent }) => {

    useEffect(() => {
        getCameraRollPermission();
    }, [])

    const handleChange = () => {
        if (!getUri) getPhoto();
        else Alert.alert("Delete Pic", "Do you want to delete this photo?", [
            { text: "yes", onPress: () => sendUriToParent(null) },
            { text: "no" }
        ])
    }
    const getPhoto = async () => {

        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });

            if (!result.cancelled) return sendUriToParent(result.uri);

        } catch (error) {
            console.log("Something went wrong", error);
        }

    }



    const getCameraRollPermission = async () => {
        const result = await ImagePicker.requestCameraRollPermissionsAsync();

        if (!result.granted) {
            alert("Change user settings to allow DoneWithit access your photos.")
        }
    }

    return (
        <Screen >


            <TouchableWithoutFeedback style={{ width: "100%", }} onPress={handleChange}>
                <View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "#DCDCDC",
                    borderRadius: 55,
                    marginVertical: 45,



                }} >
                    {getUri && <Image style={{ width: 100, height: 100, overflow: "hidden", borderRadius: 55 }} source={{ uri: getUri }} />}
                    {!getUri && <Image style={{ width: 100, height: 100, overflow: "hidden", borderRadius: 55 }} />}
                </View>
            </TouchableWithoutFeedback>


        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default ImagePickerP;