import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Screen from '../Components/Screen';
import { useDispatch } from 'react-redux';
import { addFormUpdate, addDeleteForm } from '../store/actions/formAction';
import { getDeleteMessage } from '../Hooks/userDescription'

const GetFormTest = ({ route }) => {
    const [getState, setState] = useState();
    const dispatch = useDispatch();
    const message = getDeleteMessage();
    console.log("route params below");
    console.log(route.params);

    const handleChange = (text) => {
        return setState(text);
    }

    const handlePress = () => {
        dispatch(addFormUpdate(route.params, getState));
    }

    const handleDelete = () => {
        dispatch(addDeleteForm(route.params));
    }

    return (
        <Screen>
            <View style={styles.container}>
                <Text>id from test below !!!</Text>
                <Text>{route.params}</Text>
                <TextInput
                    placeholder="description"
                    onChangeText={(text) => handleChange(text)}
                />
                <Text>{getState}</Text>
                <Button title="click" onPress={handlePress} />
                <Button title="delete" onPress={handleDelete} />
                <Text>{`delete message:${message.success}`}</Text>
            </View>
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default GetFormTest;