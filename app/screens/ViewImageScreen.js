import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../config/colors";

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.closeIcon}>
                    <MaterialCommunityIcons name="window-close" size={50} color="white" />
                </View>
                <View style={styles.openIcon}>
                    <MaterialCommunityIcons name="trash-can-outline" size={50} color="white" />
                </View>
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/chair.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        marginVertical: 0,
        width: "100%",
        height: "100%",
    },
    iconContainer: {

        top: 70,
        flexDirection: "row",
        width: "100%",
        height: 70,
        justifyContent: "space-around",
        borderWidth: 2,

    },
    closeIcon: {
        position: "absolute",
        left: 0,
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,

    },
    openIcon: {
        position: "absolute",
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
    }
})
export default ViewImageScreen;