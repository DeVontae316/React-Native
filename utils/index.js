import React, { useState, useEffect, useRef, } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation, useScrollToTop, } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AppSubmitButton, FormErrors } from '../app/Components/forms/index'

import ActivityIndicator from '../app/Components/ActivityIndicator';
import Screen from '../app/Components/Screen';
import AuthNavigation from '../app/Navigation/AuthNavigation'
import AppNavigator from '../app/Navigation/AppNavigator';
import { set } from 'react-native-reanimated';
import userState from '../app/Hooks/userTokenHook'

const Index = () => {

    const [isLoading, setLoading] = useState(true);
    //const [userToken, setUserToken] = useState(true);
    const user = userState();
    const test = setTimeout(() => {

    }, 10000)

    //const { user } = useSelector(state => state.userReducer);
    useEffect(() => {
        setTimeout(() => {

            if (user.token || !user.token) {

                return setLoading(false);
            }
            //setLoading(!isLoading);




        }, 5000)

    }, [user.token])

    console.log(user.token + ' is here');
    return (
        <NavigationContainer>
            {
                isLoading ? (
                    <Screen>
                        <ActivityIndicator visible={true} />
                    </Screen>

                ) : user.token ? (

                    <AppNavigator />

                ) : <AuthNavigation />
            }
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default Index;