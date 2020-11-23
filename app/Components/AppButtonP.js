import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView } from 'react-native';
//import color from './app/config/colors';
import colors from '../config/colors';
import Card from './Card';



const AppButtonP = ({ title, onPress, color = "primary" }) => {

    const obj = { name: "Bob", age: 45 };
    obj['name'] = "Silly";
    console.log(obj.name);
    return (


        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: colors[color] }]}>

            <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    button: {
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 25,

    },
    text: {
        textTransform: "uppercase",
        color: "white",
        fontWeight: "500",
    }


})

export default AppButtonP;