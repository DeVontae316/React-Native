import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, FlatList, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFormikContext } from 'formik';

import colors from '../../config/colors';
import FormErrors from './FormErrors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const Practice = ({ name, icon, style, ...otherProps }) => {

    //Code a function expression with a closure that returns a variable from the main function
    /*const iffe2 = (function parent(message) {

        return function child() {
            return message + ' ' + 'World';
        }
    })();

    console.log(iffe2("Bob"));


    const iffe = function () {
        let x = "This message";

        return function () {
            return x + ' ' + "is for Bob really";
        }
    };

    console.log(iffe()());
    console.log(closures()[0]());
    function closures() {
        var arr = [];

        for (var i = 0; i < 5; i++) {
            arr.push((function (i) {
                return function () {
                    console.log(i + ' ' + ' Bob');
                }
            })(i))
        }

        return arr;
    }

    function understand() {
        var arr = [];

        for (var i = 0; i < 5; i++) {
            arr.push(function () { console.log(i + ' ' + 'Billy') });
        }

        return arr;
    }

    const holdMe = understand();
    console.log(holdMe[0]());


    console.log(closures()[0]());

    let x = (name) => {
        return {
            getName: () => { return name + ' was chosen'; }
        }
    }

    console.log(x("Billy").getName())


    let hold = () => {
        let x = "Billy";

        return {
            getBilly: () => { return x; }
        }
    }

    console.log(hold().getBilly());


    console.log(test().getName())

    function test() {
        let c = "Bob";

        return {
            getName: () => { return c; }
        }
    }

    function myPromises() {
        return new Promise((resolve, reject) => {
            if (1 === 1) {
                resolve("Yep, you're a genius");
            } else {
                reject("Nope, go back to kindergarden");
            }
        })
    }

    const data = [
        { firstName: "John", lastName: "Wall", age: 55, height: "6'3", },
        { firstName: "Jake", lastName: "Kerry", age: 32, height: "6'1", },
        { firstName: "Willis", lastName: "Blake", age: 55, height: "6'0", },
        { firstName: "Tre", lastName: "Moore", age: 19, height: "6'1", },
    ]

    console.log(
        data.some(element => element.firstName.startsWith('J', 5))
    )

    const holdArrayData = data.sort((a, b) => {
        if (a.firstName > b.firstName) {
            return 1;
        } else {
            return -1;
        }
    });

    const getArrayData = holdArrayData.map(element => element.firstName);

    console.log(getArrayData);

    const serverData = ["Kiwi", "Apple", "Tomatos"];
    const myData = ["A", "B", "C", "D"];

    const checkAvailablility = (arr, item) => {
        return arr.some(element => element === item);
    }
    console.log(checkAvailablility(serverData, "Apple"));

    const iWantAC = myData.slice(0, 3).filter(element => element !== "B");
    console.log(iWantAC);
    console.log(myData);

    const replace = myData.splice(1, 1, "B is for because I'm haughty....lol");
    console.log(myData);

    myData.splice(0, 0, "A is for apples");
    console.log(myData);

    var animals = ["dog", "cat", "birds", "fish"];

    var dog = animals.find(element => element.startsWith('d', 0))
    animals.push(dog);
    console.log(animals);
    animals.pop()
    console.log(animals);
    animals.unshift("Start");
    console.log(animals);
    animals.shift();
    console.log(animals);*/


    //Stop at 6:00 today is Monday
    const data = [
        { name: "Mosh Manbaby", id: 1, message: "Hey, where's the cream filling" },
        { name: "Manny Buckets", id: 2, message: "Hey, where's the cream filling" },
        { name: "Cisco PC", id: 3, message: "Hey, where's the cream filling" },
        { name: "Micky Jordan", id: 4, message: "Hey, where's the cream filling" },
    ]
    const [items, setItems] = useState(data);
    const handleList = (item) => {
        return setItems(items.filter(items => items.id !== item.id));
    }


    return (
        <FlatList
            refreshing={false}
            onRefresh={() => {
                return setItems([
                    { name: "Mosh Manbaby", id: 1, message: "Hey, where's the cream filling" },
                    { name: "Mosh Manbabeee", id: 2, message: "Still none..." },
                ])
            }}
            ItemSeparatorComponent={() => <View style={{ height: 1, borderWidth: 1, borderColor: "#DCDCDC" }} />}
            data={items}
            keyExtractor={key => key.id.toString()}
            renderItem={({ item }) => (
                <Swipeable renderRightActions={() =>
                    <TouchableWithoutFeedback
                        onPress={() => handleList(item)}
                    >
                        <View style={{ width: 70, height: "100%", backgroundColor: "tomato" }} />
                    </TouchableWithoutFeedback>
                }>
                    <TouchableHighlight underlayColor="#DCDCDC" onPress={() => console.log(item)}>
                        <View style={{ flexDirection: "row", padding: 15, width: "100%", flex: 1 }}>
                            <Image
                                style={{ borderRadius: 35 }}
                                source={{
                                    uri: "https://picsum.photos/200/300",
                                    height: 45,
                                    width: 45,
                                }} />
                            <View style={styles.titlesContainer}>
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.text}>{item.message}</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </Swipeable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        padding: 15,
        height: 60,
        borderRadius: 35,
        backgroundColor: colors.lightGrey,
        marginTop: 70,
        marginBottom: 15,
    },
    titlesContainer: {
        flexDirection: "column",
        padding: 10,
    },

})

export default Practice;