import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GetFormTestScreen from '../screens/GetFormTest';
import FormTestScreen from '../screens/FormTestScreen';

const { Navigator, Screen } = createStackNavigator();

const FormTest = () => {
    return <Navigator
        mode="modal"
    >
        <Screen options
            component={FormTestScreen}
            name="FormTest"
            options={{
                headerShown: false
            }}
        />
        <Screen
            component={GetFormTestScreen}
            name="GetDescription"

        />
    </Navigator>
}

export default FormTest;