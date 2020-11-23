import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';

import { Screen } from 'react-native-screens';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../config/colors';
import userState from '../Hooks/userTokenHook';
import Card from './Card';
const AsyncTesting = () => {
    const [pickups, setPickups] = useState();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [refresh, setRefresh] = useState(false)
    let user = userState(state => state.pickupReducer);
    useEffect(() => {
        setTimeout(async () => {
            const url = "http://172.16.0.26:3000/pickup";
            const header = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }

            let getPickups = await fetch(url, header);
            let res = await getPickups.json();
            console.log(res.length + ' .....test');
            if (res.length !== 0) {

                console.log("length below");
                console.log(getPickups.length);
                setPickups(res);
                setLoading(false);
                console.log("pickups below")
                console.log(res);
                console.log("user token below");
                console.log(user.token);
            }
            if (refresh) {
                //setLoading(false);
                setRefresh(false);

            }
            setLoading(false);
            setError(true);
        }, 3000)
    }, [refresh])



    return <Screen>
        {isLoading ? (
            <ActivityIndicator style={{ marginTop: 50 }} animating={isLoading} size="large" />
        ) : pickups ? (
            <FlatList
                refreshing={refresh}
                onRefresh={() => {
                    setRefresh(true)
                    setLoading(false)
                    console.log(refresh)
                }}
                data={pickups}
                keyExtractor={key => key._id.toString()}
                renderItem={({ item }) => {
                    return <Card
                        key={item._id}
                        image={{ uri: item ? item.photo[0] : null, width: 100, height: 100 }}
                        title={item.label}
                        subTitle={item.description}
                    />
                }}
            />

        ) : error && <ScrollView
            refreshing={refresh}
            onRefresh={() => {
                setRefresh(true)
                console.log(refresh)
            }}
        >
            <Text style={{ height: 200, marginTop: 100 }} >Something went wrong!!!:(</Text>
        </ScrollView>
        }

    </Screen>
}

export default AsyncTesting;