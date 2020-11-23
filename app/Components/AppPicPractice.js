import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Screen from './Screen';
import { useFormikContext } from 'formik';
import { FormErrors } from './forms';

const data = [
    { label: "Clothes", id: 1 },
    { label: "Books", id: 2 },
    { label: "Shoes", id: 3 },
]
const AppPicPractice = ({ name }) => {

    const { setFieldValue, values, errors, touched } = useFormikContext();
    const [selectedItem, setSelectedItem] = useState("Category");
    const [modalVisible, setModalVisible] = useState(false);
    return (

        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={{ borderRadius: 35, backgroundColor: "#DCDCDC", width: "100%", height: 45 }}>
                    <View style={{ flexDirection: "row", padding: 12 }}>
                        {!values[name] && <Text style={{ flex: 1 }}>{name}</Text>}
                        {values[name] && <Text style={{ flex: 1 }}>{values[name].label}</Text>}
                        <MaterialCommunityIcons name="chevron-down" size={24} color="black" />
                    </View>
                </View>


            </TouchableWithoutFeedback>
            {touched[name] && <FormErrors errors={errors[name]} />}
            <Modal
                visible={modalVisible}
                animationType="slide"
            >
                <Screen>
                    <Button title="close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={data}
                        keyExtractor={key => key.id.toString()}
                        renderItem={({ item }) => (
                            <View style={{ padding: 15, }}>
                                <TouchableWithoutFeedback onPress={
                                    () => {
                                        setModalVisible(false)
                                        setFieldValue(name, item)

                                    }
                                }>
                                    <Text style={{ marginBottom: 10 }}>{item.label}</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        )}
                    />
                </Screen>
            </Modal>

        </>

    );
}
const styles = StyleSheet.create({
    container: {},
})
export default AppPicPractice;
