import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import config from '../config/colors';
import AppText from './AppText';
import colors from '../config/colors';



const AppButton = ({ style, title, onPress, color = "primary" }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: colors[color] }, style]}
            onPress={onPress}
        >
            <Text style={[styles.text]}>{title}</Text>
        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        width: "100%",
        height: 50,
        borderRadius: 25,
        backgroundColor: config.primary,
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        color: "white",
        fontSize: 20,
        textTransform: "uppercase",
    }
})

export default AppButton;