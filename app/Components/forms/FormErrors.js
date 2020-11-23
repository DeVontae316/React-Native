import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppText from '../AppText';


const FormErrors = ({ errors }) => {
    return (
        <View style={styles.container}>
            {errors && <AppText style={styles.error}>{errors}</AppText>}
            {!errors && null}
        </View>
    );
}

export default FormErrors;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 35,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15
    },
    error: {
        color: "red",
        fontSize: 16
    },
    success: {
        color: "green",
        fontSize: 17,
    },
})