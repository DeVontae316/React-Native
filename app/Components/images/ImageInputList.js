import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    return (
        <View style={styles.container}>
            {imageUris.map(uri => (
                <View key={uri} style={{ marginHorizontal: 12 }}>
                    <ImageInput
                        imageUri={uri}
                        sendUriToUseState={() => onRemoveImage(uri)}
                    />
                </View>
            ))}
            <ImageInput sendUriToUseState={uri => onAddImage(uri)} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,

    },
})
export default ImageInputList;