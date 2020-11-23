import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
//import AppText from '../app/Components/AppText';
import colors from '../config/colors';
import AppText from '../Components/AppText';
import { Entypo } from '@expo/vector-icons';
import ListItem from '../Components/ListItem';

const ListingDetailScreen = ({ title, price, route }) => {

    const Listing = route.params

    return (
        <View style={styles.container}>

            <Image style={styles.image} source={Listing.image} />

            <View style={styles.detailsandLikesContainer}>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{Listing.title}</AppText>
                    <AppText style={styles.price}>{Listing.subTitle}</AppText>
                </View>
                <View style={styles.likeandDislikeContainer}>
                    <Entypo name="thumbs-up" size={20} color={colors.secondary} >like</Entypo>
                    <Entypo name="thumbs-down" size={20} color={colors.primary} >dislike</Entypo>
                </View>
            </View>
            <View style={styles.listItemContainer}>

                <ListItem
                    title="Mosh Hamedani"
                    subTitle="5 listings"
                    image={require("../assets/mosh.jpg")}
                />
            </View>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {


    },
    image: {
        width: "100%",
        height: 300,
    },
    detailsandLikesContainer: {
        flexDirection: "row",

    },
    listItemContainer: {
        marginVertical: 30,
    },
    detailsContainer: {
        padding: 15,
        flex: 1,
        marginLeft: 10
    },

    title: {
        fontSize: 24,
        fontWeight: 500,
        color: colors.black,
        fontWeight: "500",
        marginBottom: 10,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20
    },

    likeandDislikeContainer: {
        //shadowOpacity: { width: .5, height: .5 },
        shadowColor: "grey",
        shadowOpacity: .25,
        flexDirection: "row",
        marginTop: 15,

        flex: 1,
        justifyContent: "space-evenly",
    },


})

export default ListingDetailScreen;
