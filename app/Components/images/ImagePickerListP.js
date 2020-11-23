import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImagePickerP from './ImagePickerP';
import { useFormikContext } from 'formik';

const ImagePickerListP = ({ name }) => {
    const { setFieldValue, values } = useFormikContext();
    const scrollView = useRef();

    const addingURIS = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    }

    const deletingUris = (uri) => {
        setFieldValue(name, values[name].filter(i => i !== uri));
    }
    return (
        <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: true })}>
            <View style={{ flexDirection: "row", width: "100%" }}>

                {values[name].map(uri => (

                    <ImagePickerP
                        key={uri}
                        sendUriToParent={deletingUris}
                        getUri={uri}
                    />

                ))}

                <ImagePickerP
                    sendUriToParent={addingURIS}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default ImagePickerListP;