import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
/*
const Apptext = ({children style})=>{
    return(
        <Text style={[styles.text,style]}>{children}</Text>
    )
}
*/
const AppText = ({ children, style, }) => {
    return (
        <Text numberOfLines={3} style={[styles.text, style]}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    text: {


        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 20,
                fontFamily: "Roboto",
            }
        })

    }
})
export default AppText;