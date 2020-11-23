import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useFormikContext } from 'formik';

const FormButtonFactorP = () => {
    const { handleSubmit } = useFormikContext();
    return (
        <>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={{ color: "white", fontSize: 18, }}>Post</Text>
            </TouchableOpacity>
        </>
    );
}
const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "blue",
        height: 55,
        borderRadius: 35,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",

        marginVertical: 55,
    },
})
export default FormButtonFactorP;