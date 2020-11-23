import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const AccountNavigation = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator >
            <Stack.Screen name="AccountScreen" component={AccountScreen} />
            <Stack.Screen name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default AccountNavigation;