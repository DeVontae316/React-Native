import React from 'react';
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const ListItemDeleteAction = ({ onPress, style }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <MaterialCommunityIcons style={styles.trash} name="trash-can-outline" size={35} color="white" />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff5252",
        width: 70,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

});
export default ListItemDeleteAction;