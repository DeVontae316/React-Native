import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import ImageListP from './ImageListP';
import { FormErrors } from '../forms';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const FormImageListInput = ({ name }) => {
    const { setFieldValue, errors, values, touched } = useFormikContext();

    const handleAdd = (uri) => {
        setFieldValue(name, [...values[name], uri]);
    }

    const handleDelete = (uri) => {
        setFieldValue(name, values[name].filter(photoUri => photoUri !== uri));
    }
    return (
        <>
            <View>
                <ImageListP
                    imageURIS={values[name]}
                    handleAdd={handleAdd}
                    handleDelete={handleDelete}


                />
            </View>


        </>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default FormImageListInput;