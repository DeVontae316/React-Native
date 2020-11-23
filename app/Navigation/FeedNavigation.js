import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../screens/ListingScreen';
import ListingDetailScreen from '../screens/ListingDetailScreen';

const FeedNavigation = () => {
    const Stack = createStackNavigator();
    return (

        <Stack.Navigator
            mode="modal"

        >
            <Stack.Screen
                name="ListingScreen"
                component={ListingScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ListingDetailsScreen"
                options={{ headerShown: true }}
                component={ListingDetailScreen}
            />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default FeedNavigation;