import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { View, StyleSheet, Text, TouchableOpacity, Image, FlatList } from 'react-native';

import { Screen } from 'react-native-screens';
import { useSelector, useDispatch } from 'react-redux';
import colors from '../config/colors';
import userState from '../Hooks/userTokenHook';
import Card from '../Components/Card';
import { createEndPoint, createLimitedSearchQueries } from '../store/sagas/Localhost/localhost';

const MyPickupsScreen = () => {
    const [pickups, setPickups] = useState();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [getLimit, setLimit] = useState(5);
    const [getSkip, setSkip] = useState(0);
    const [isActivityOn, setActivity] = useState(true)

    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const onRefreshHandle = useCallback(() => {
        setRefresh(true);

        wait(2000).then(() => setRefresh(false));
    }, []);
    let user = userState();
    let getMoreHandler = async () => {
        //const token = userState();
        const uri = createEndPoint("total");
        const req = await fetch(uri, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            }
        });
        const response = await req.json();
        console.log("response below");
        console.log(response);
        console.log("Total below");
        console.log(response.total);


        console.log("getMoreHandler was called again");


        if (getLimit < response.total) {
            setLimit(getLimit + 5);
            setSkip(getSkip);

            const url = createLimitedSearchQueries("pickup", getLimit, getSkip);
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
                setActivity(false);
                //setLoading(true);
                console.log("pickups below")
                console.log(res);
                console.log("user token below");
                console.log(user.token);
            }

        }
    }
    useEffect(() => {

        setTimeout(async () => {
            const url = createLimitedSearchQueries("pickup", getLimit, getSkip);
            const header = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }

            let getPickups = await fetch(url, header);
            let res = await getPickups.json();
            console.log(res.length + ' .....test');
            if (res.length !== 0 && refresh !== false) {

                console.log("length below");
                console.log(getPickups.length);
                setPickups(res);
                setLoading(false);

                console.log("pickups below")
                console.log(res);
                console.log("user token below 6");
                console.log(user.token);
            }
            /* if (refresh) {
                 //setLoading(false);
                 setRefresh(false);
 
             }*/
            setLoading(false);
            //setRefresh(false)
            ;
        }, 4000)
    }, [refresh])



    return <Screen>
        {isLoading ? (
            <ActivityIndicator style={{ marginTop: 50 }} animating={isLoading} size="large" />
        ) : pickups ? (
            <FlatList
                onEndReached={getMoreHandler}
                onEndReachedThreshold={0}
                ListFooterComponent={() => isActivityOn && <ActivityIndicator animating size="large" />}
                refreshing={refresh}
                onRefresh={onRefreshHandle}
                data={pickups}
                keyExtractor={key => key._id.toString()}
                renderItem={({ item }) => {
                    return <Card
                        key={item._id}
                        image={{ uri: item.photo[0] ? item.photo[0] : undefined, width: 100, height: 100 }}
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

export default MyPickupsScreen;