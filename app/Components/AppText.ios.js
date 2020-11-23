import React from 'react';
import { Text, StyleSheet, } from 'react-native';


const AppText = ({ children, style, ...otherProps }) => {
    return (
        <Text {...otherProps} style={[styles.text, style]}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: "Avenir",
    }
})
export default AppText;