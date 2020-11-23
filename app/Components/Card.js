import React from 'react';
import { StyleSheet, View, Image } from "react-native";
import colors from '../config/colors';
import AppText from './AppText';
import { Entypo } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Card = ({ title, subTitle, image, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image style={styles.image} source={image} />
                <View style={styles.rowView}>
                    <View style={styles.titleandSubtitleContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>


                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: colors.white,
        margin: 20,


    },
    rowView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    image: {

        width: "100%",
        height: 200,

    },
    title: {
        marginBottom: 7,
    },
    titleandSubtitleContainer: {
        padding: 20,
    },
    like: {
        padding: 0,
        marginTop: 15,
    },
    dislike: {


        padding: 0,
        marginTop: 15,
        height: 100,

    },


    subTitle: {

        color: colors.secondary,
        fontWeight: "bold",
    }

})

export default Card;