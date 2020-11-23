import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from './Icon';
import AppText from './AppText';


const AppCategoryPickerItem = ({ item, onPress }) => {
    return (
        <View style={styles.container}>
            <Icon style={styles.icon} iconColor="white" backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.text}>{item.label}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 10, marginHorizontal: 15, alignItems: "center" },
    text: { marginHorizontal: 15 },

})
export default AppCategoryPickerItem;