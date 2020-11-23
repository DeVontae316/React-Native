import React, { useState } from "react";
import { FlatList, View } from 'react-native';
import Constants from "expo-constants";


import ListItem from "../Components/ListItem";
import Screen from "../Components/Screen";
import Seperator from '../Components/Seperator';


const intialMessages = [
    {
        id: 1,
        name: "Bob Billy",
        image: require("../assets/mosh.jpg"),
        description: "Hey Bob Billy! What you looking for?  \n I think I may have what you need"
    },
    {
        id: 2,
        name: "Bob Billy",
        image: require("../assets/mosh.jpg"),
        description: "Hey Bob Billy! What you looking for today?"
    },
    {
        id: 3,
        name: "Bob Billy",
        image: require("../assets/mosh.jpg"),
        description: "Hey Bob Billy! What you looking for?"
    }
]

const MessagesScreen = (props) => {
    const [messages, setMessages] = useState(intialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (item) => {
        setMessages(messages.filter(m => m.id !== item.id));
    }
    return (
        <Screen >
            <FlatList
                refreshing={refreshing}
                onRefresh={() => setMessages(
                    [
                        {
                            id: 2,
                            name: "Bob Billy",
                            image: require("../assets/mosh.jpg"),
                            description: "Hey Bob Billy! What you looking for today?"
                        },
                    ]
                )}
                ItemSeparatorComponent={() => <Seperator />}
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        renderLeftActions={() => <View style={{ width: 70, height: "100%", backgroundColor: "tomato" }} onPress={() => handleDelete(item)} />}
                        title={item.name}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                    />
                )} />

        </Screen>
    );
}



export default MessagesScreen;