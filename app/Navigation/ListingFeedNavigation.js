import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ListingEditScreen from '../screens/ListingEditScreen';
import UploadResultsScreen from '../screens/UploadResultsScreen';

const ListingFeedNavigation = () => {
    const Stack = createStackNavigator();
    return (

        <Stack.Navigator
            mode="modal"

        >
            <Stack.Screen
                name="ListingScreen"
                component={ListingEditScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="UploadResultsScreen"
                options={{ headerShown: true }}
                component={UploadResultsScreen}
            />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default ListingFeedNavigation;