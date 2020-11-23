import React from 'react';
import { Text, StyleSheet, } from 'react-native';

const AppText = ({ children, style }) => {
    return (
        <Text numberOfLines={3} style={[styles.text, style]}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: "Roboto",



    }
});
export default AppText;