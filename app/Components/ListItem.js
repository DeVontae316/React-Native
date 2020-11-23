import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import AppText from './AppText';
import colors from '../config/colors';
import Icon from './Icon';



const ListItem = ({ chevron, iconComponent, title, subTitle, image, onPress, renderRightActions }) => {

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
                <View style={styles.fullPostConatiner}>


                    {image && <Image style={styles.postImage} source={image} />}

                    {iconComponent}

                    <View style={styles.listingTitlesContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText numberOfLines={1} style={styles.subTitle}>{subTitle}</AppText>}
                    </View>

                    {chevron &&
                        <View style={styles.chevron} >
                            <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                        </View>
                    }
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}


const styles = StyleSheet.create({
    chevron: {
        padding: 20
    },
    fullPostConatiner: {
        flexDirection: "row",
        paddingLeft: 15,
        marginVertical: 5,



    },
    title: {
        fontWeight: "bold",
        fontSize: 15,
    },
    subTitle: {
        color: colors.grey,
    },
    postImage: {
        width: 70,
        height: 70,
        borderRadius: 35,

    },
    listingTitlesContainer: {

        flexDirection: "column",
        marginLeft: 10,
        justifyContent: "center",
        flex: 1,
    }
})
export default ListItem;