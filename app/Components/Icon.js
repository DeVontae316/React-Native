import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Icon = ({ name, size = 40, backgroundColor = "black", iconColor }) => {
    return (
        <View style={[styles.container, { width: size, height: size, borderRadius: size / 2, backgroundColor }]}>
            <MaterialCommunityIcons size={size * 0.5} name={name} color={iconColor} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    }
})



export default Icon;