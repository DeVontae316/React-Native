import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

import myStyles from "../config/myStyles";

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.container, style,]}>

            {children}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    view: {
        flex: 1,
    },


})

export default Screen;