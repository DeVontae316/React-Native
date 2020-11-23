
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { FlatList } from 'react-native';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import Screen from '../Components/Screen'
import { createSearchQueries } from '../store/sagas/Localhost/localhost';
import Card from '../Components/Card';





const SearchScreen = () => {
    const [query, setQuery] = useState("Clothes");
    const [getData, setData] = useState([]);
    const [getError, setError] = useState({});
    const [getBoolean, setBoolean] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [getNetInfo, setNetInfo] = useState(null);
    const netInfo = useNetInfo();
    const handleSearch = () => {
        setBoolean(!getBoolean);

    }
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout)
        })
    }
    const handleRefresh = useCallback(() => {
        setRefresh(true);

        setBoolean(!getBoolean);
        wait(2000).then(() => setRefresh(false));
    }, [])

    const resetData = () => {
        setData(undefined);
    }
    useEffect(() => {
        if (query !== undefined && netInfo.isInternetReachable) {
            setTimeout(async () => {

                const uri = createSearchQueries("pickups", query);
                const headers = {
                    method: "GET",

                }
                let req = await fetch(uri, headers)
                    .then(data => data.json())
                    .catch(err => err);

                if (req.length > 0) {
                    setData(req);
                    setError({});
                    setNetInfo(false)

                }

                if (req.error) {
                    setError(req);
                    setData([]);
                    setNetInfo(false)
                }

                console.log("req below");
                console.log(req);
                console.log("req aove");


                //console.log(res);



            }, 1000)
        }
        if (!netInfo.isInternetReachable) {
            setNetInfo(true);
            setData({});

        }

    }, [getBoolean, netInfo.isInternetReachable])



    /*const handleKeyDown = (e) => {
       if (e.nativeEvent.key == "search") {
         return console.log("Bob press enter!!!");
       }
     }*/
    return console.log(netInfo.isInternetReachable + '   network info here') || (


        <Screen>
            <>
                <View style={styles.searchBar}>
                    <TextInput

                        onChangeText={(text) => setQuery(text)}
                        returnKeyType="search"
                        keyboardType="default"
                        onSubmitEditing={handleSearch}
                        placeholder="search ie:clothes,furniture,agriculture"
                    />
                </View>

                <View>
                    {getError.error &&
                        <Text>{getError.error}</Text>
                    }
                </View>


                {getData.length > 0 &&
                    <FlatList
                        refreshing={refresh}
                        onRefresh={() => {
                            setRefresh(handleRefresh);
                            setBoolean(!getBoolean);

                        }}
                        data={getData}
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
                }


                <View>
                    {getNetInfo &&
                        <FlatList
                            refreshing={refresh}
                            onRefresh={handleRefresh}

                            data={[{ networkInformation: "Inrernet connection is required for certain app functions. If you're seeing this message, check your internet connection and restart app! " }]}
                            keyExtractor={key => key.networkInformation.toString()}
                            renderItem={({ item }) => (
                                <Text>
                                    {item.networkInformation}
                                </Text>
                            )}
                        />

                    }
                </View>




            </>
        </Screen>



    )

}






const styles = StyleSheet.create({

    searchBar: {
        backgroundColor: '#DCDCDC',
        width: "100%",
        height: 45,
        borderRadius: 25,
        padding: 15,
    }

})

export default SearchScreen;
