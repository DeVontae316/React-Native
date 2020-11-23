import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { useFormikContext } from 'formik';
import FormErrors from './FormErrors';

const FormRefactorPractice = ({ data, style, name, useFormik, onChange, ...otherProps }) => {
    const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

    return (
        <View>
            {useFormik ?
                <>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            {...otherProps}
                            style={[style]}
                            onChangeText={handleChange(name)}
                            onBlur={() => setFieldTouched(name)}
                        />
                    </View>

                    {touched[name] && errors[name] && <FormErrors errors={errors[name]} />}
                </>
                :

                <TextInput
                    style={[style]}
                    {...otherProps}
                    onChangeText={(input) => onChange(input)}
                />

            }


        </View>


    );
}
const styles = StyleSheet.create({
    container: {},
    textInputContainer: {
        padding: 15,
        width: "100%",
        height: 45,
        backgroundColor: "#DCDCDC",
        borderRadius: 35,
        marginBottom: 25,
        marginTop: 10,

    },
    textInput: {
        fontSize: 18,
    },

})
export default FormRefactorPractice;