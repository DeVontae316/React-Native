import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../Components/Card';
import Screen from '../Components/Screen';

Data = [
    {
        id: 1,
        title: "Red Jacket",
        subTitle: "$100.00",
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch",
        subTitle: "$170.00",
        image: require("../assets/couch.jpg")
    },

]

const ListingScreen = ({ navigation }) => {

    const [messages, setMessages] = useState(Data);
    const [refresh, setRefresh] = useState(false);
    return (
        <Screen style={[{ backgroundColor: "#eee" }]}>
            <FlatList
                refreshing={refresh}

                data={messages}
                keyExtractor={key => key.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        onPress={() => navigation.navigate("ListingDetailsScreen", item)}
                        title={item.title}
                        subTitle={item.subTitle}
                        image={item.image}
                    />
                )}

            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    testPaddingHorizontal: {
        paddingHorizontal: 30,
    }
})

export default ListingScreen;