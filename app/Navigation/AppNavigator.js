import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import FormTestNaviagtion from '../Navigation/FormTest';

import ListingFeedNavigation from './ListingFeedNavigation';
import ListingEditScreen from '../screens/ListingEditScreen';
import MyPickupScreen from '../screens/MyPickupsScreen';
import AccountNavigation from '../Navigation/AccountNavigation';
import colors from '../config/colors';
import FeedNavigation from './FeedNavigation';
import NewListingButton from './NewListingButton';
import { getRandomUserAsync } from '../store/actions/userActions';
import AsyncTesting from '../Components/MyPickups';
import SearchScreen from '../screens/SearchScreen';

const AppNavigator = () => {

    const Tab = createBottomTabNavigator();
    const dispatch = useDispatch();
    const handleAsync = () => {

        dispatch(getRandomUserAsync());
        console.log("Hello World!!!")
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeBackgroundColor: colors.primary,
                activeTintColor: "white",

            }}
        >
            <Tab.Screen

                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons color={color} size={size} name="home" />
                }}
                name="ListingScreen"
                component={FeedNavigation}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons color={color} size={size} name="account" />
                }}
                name="AccountScreen"
                component={AccountNavigation}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons size={size} color={color} name="human-male-male" />
                }}
                name="MyPickups"
                component={MyPickupScreen}
            />
            <Tab.Screen

                options={({ navigation }) => ({
                    tabBarButton: () => (<NewListingButton onPress={() => navigation.navigate("ListingEditScreen")} />),
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons color={color} size={size} name="plus-circle" />
                })}
                name="ListingEditScreen"
                component={ListingFeedNavigation}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons size={size} color={color} name="human-male-male" />
                }}
                name="Search"
                component={SearchScreen}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ size, color }) => <MaterialCommunityIcons size={size} color={color} name="human-male-male" />
                }}
                name="FormTest"
                component={FormTestNaviagtion}
            />
        </Tab.Navigator>
    );

}
const styles = StyleSheet.create({
    container: {},
})
export default AppNavigator;