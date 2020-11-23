import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, Platform, Alert, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import Screen from './Screen';
import PickerItem from './PickerItem';
import { useFormikContext } from 'formik';




const AppPicker = ({
    width = "100%",
    name,
    icon,
    items,
    numberOfColumns,
    PickerItemComponent = PickerItem
}) => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setFieldValue, values } = useFormikContext();

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsModalOpen(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialIcons style={styles.icon} name={icon} size={20} color="black" />}
                    <Text style={styles.text}>{values[name] ? values[name].label : name}</Text>
                    <MaterialCommunityIcons style={styles.chevron} name="chevron-down" size={24} color="black" />

                </View>
            </TouchableWithoutFeedback >
            <Modal animationType="slide" visible={isModalOpen}>
                <Screen>
                    <Button title="Close" onPress={() => setIsModalOpen(false)} />
                    <FlatList
                        numColumns={numberOfColumns}
                        data={items}
                        keyExtractor={input => input.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}

                                onPress={
                                    () => {
                                        setIsModalOpen(false)
                                        setFieldValue(name, item);
                                    }
                                }
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.lightGrey,
        marginVertical: 25,
        borderRadius: 25,



        padding: 15,
    },
    chevron: {

    },
    text: {
        fontSize: 18,
        flex: 1,
        marginHorizontal: 10,
        color: "#989898",
    },
    icon: {
        paddingHorizontal: 0,
    },

    textInput: {
        width: "90%",
        fontSize: 18,
        color: colors.dark,
        marginHorizontal: 10,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },

})

export default AppPicker;