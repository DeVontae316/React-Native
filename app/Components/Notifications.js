import React from 'react';
import AppText from "./AppText";
import { StyleSheet, View, Text } from "react-native";
import colors from '../config/colors';
import { Ionicons } from '@expo/vector-icons';



const Notifications = ({ children, title, time, annoucement, savings }) => {
    return (
        <View style={styles.notification}>
            <View style={styles.amcContainer}>
                <View style={styles.circle} />
                <View style={styles.descriptionContainer}>
                    <Text>{title}</Text>
                    <View style={styles.smallCircle} />
                    <Text>{time}</Text>
                    <Ionicons name="md-arrow-dropdown" size={24} color="black" />
                </View>
            </View>
            <View style={styles.annoucementContainer}>
                <Text style={styles.header}>{annoucement}</Text>
                <Text style={styles.subTitle} numberOfLines={1}>{savings}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    notification: {

        width: "100%",
        height: 125,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        backgroundColor: "dodgerblue",
        backgroundColor: "white",

    },
    header: {
        fontWeight: "600",
        fontSize: 16
    },
    subTitle: {
        color: "grey",
    },
    circle: {
        borderRadius: 50,
        width: 25,
        height: 25,
        backgroundColor: "purple",
        marginTop: 10,
    },
    smallCircle: {
        borderRadius: 50,
        width: 5,
        height: 5,
        backgroundColor: "purple",
        marginTop: 6,
    },
    annoucementContainer: {
        marginHorizontal: 15
    },
    amcContainer: {
        flexDirection: "row",
        padding: 10,
    },
    descriptionContainer: {
        flexDirection: "row",
        marginHorizontal: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        width: "45%",
        justifyContent: "space-between",
        alignItems: "center"

    }
})

export default Notifications;