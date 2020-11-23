import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const NewListingButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons size={35} name="plus-circle" color="white" />
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 80,
        height: 80,
        borderRadius: 40,
        bottom: 20,
        borderColor: "white",
        borderWidth: 10,
        alignItems: "center",
        justifyContent: "center",
    },
})
export default NewListingButton;