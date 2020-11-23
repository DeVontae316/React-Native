import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImagePickerP from './ImagePickerP';
import { useFormikContext } from 'formik';
import Screen from '../Screen';



const PracticeImagePickerList = ({ name }) => {

    const { setFieldValue, values } = useFormikContext();

    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    }

    const handleDelete = (uri) => {
        setFieldValue(name, values[name].filter(pic => pic !== uri))
    }
    return (
        <Screen style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                {values[name].map(uri => (
                    <View key={uri} style={{ marginHorizontal: 3 }}>
                        <ImagePickerP
                            getUri={uri}
                            sendUriToParent={() => handleDelete(uri)}
                        />
                    </View>
                ))}
                <ImagePickerP
                    sendUriToParent={handleAdd}
                />
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        //marginVertical: 100
    },
})
export default PracticeImagePickerList;