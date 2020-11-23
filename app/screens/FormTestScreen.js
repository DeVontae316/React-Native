import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import { Formik } from 'formik';
import { TextInput } from 'react-native';
import Screen from '../Components/Screen';
import { useDispatch } from 'react-redux';
import { addFormTestAction, addFormUpdate } from '../store/actions/formAction';
import { getDescription, getUpdatedDescription } from '../Hooks/userDescription';
import { createEndPoint } from '../store/sagas/Localhost/localhost';

const FormTestScreen = ({ navigation }) => {
    const [getData, setData] = useState();
    const dispatch = useDispatch();
    const description = getDescription();
    const update = getUpdatedDescription();
    console.log("id below")
    console.log(description._id);


    useEffect(() => {
        setTimeout(async () => {
            const url = createEndPoint("testform");
            const headers = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
            let fetchData = await fetch(url, headers);
            let res = await fetchData.json();
            setData(res);
            console.log("Data below")
            console.log(res);

        }, 1000)

    }, [])

    return (
        <Formik
            initialValues={{
                description: ""
            }}
            onSubmit={(values) => {
                dispatch(addFormTestAction(values))
                //navigation.navigate("GetDescription", description._id)
                console.log("form test values");
                console.log(values);
            }}
        >
            {({ handleChange, handleSubmit, values }) => (
                <Screen>
                    <>
                        <TextInput
                            placeholder="description"
                            onChangeText={handleChange("description")}
                        />
                        <Button title="click" onPress={handleSubmit} />

                        <Button title="results" onPress={() => navigation.navigate("GetDescription", description._id)} />


                        <Text>{`${description.description} from reducer`}</Text>
                        <Text>{` new description : ${update.description}`}</Text>

                        <FlatList
                            data={getData}
                            keyExtractor={key => key._id.toString()}
                            renderItem={({ item }) => {
                                return <View>
                                    <Text>{item.description}</Text>
                                </View>
                            }}
                        />



                    </>
                </Screen>
            )
            }
        </Formik >
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default FormTestScreen;