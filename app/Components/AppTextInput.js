import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFormikContext } from 'formik';

import colors from '../config/colors';
import myStyles from '../config/myStyles';
import { FormErrors } from './forms';




const AppTextInput = ({ usingFormik, name, icon, width = "100%", ...otherProps }) => {


    const { handleChange, errors, touched, setFieldTouched } = useFormikContext();
    return (
        <>
            <View style={[styles.container, { width }]}>
                <MaterialIcons style={styles.icon} name={icon} size={20} color="black" />

                <TextInput
                    placeholderTextColor={colors.medium}
                    onChangeText={handleChange(name)}
                    onBlur={() => setFieldTouched(name)}
                    style={myStyles.textInput}
                    {...otherProps}
                />





            </View>


        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: myStyles.colors.lightGrey,
        marginVertical: 25,
        borderRadius: 25,


        padding: 15,
    },
    icon: {
        paddingHorizontal: 0,
    },



})

export default AppTextInput;