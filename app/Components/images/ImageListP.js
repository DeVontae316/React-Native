import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInputP from './ImageInputP';

const ImageListP = ({ imageURIS = [], handleAdd, handleDelete, }) => {
    const scrollView = useRef();
    return (
        <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
            <View style={styles.container}>
                {imageURIS.map(uri => (
                    <View style={styles.photos} key={uri}>
                        <ImageInputP
                            imageURI={uri}
                            sendDataToParent={() => handleDelete(uri)}

                        />
                    </View>
                ))}
                <ImageInputP sendDataToParent={uri => handleAdd(uri)} />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",


    },

})
export default ImageListP;