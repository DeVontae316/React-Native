import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';

const PickerItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.list} onPress={onPress}>
            <View style={{ padding: 5 }}>
                <MaterialCommunityIcons name={item.icon} size={44} color={item.backgroundColor} />
                <Text>{item.label}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
})
export default PickerItem;