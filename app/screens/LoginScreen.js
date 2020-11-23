import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, useColorScheme } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import userState from '../Hooks/userTokenHook';

import Screen from '../Components/Screen';
import AppTextInput from '../Components/AppTextInput';
import { AppSubmitButton } from '../Components/forms';
import colors from '../config/colors';
import { loginUserAction, updateErrorMessageAction } from '../store/actions/userActions';
import ActivityIndicator1 from '../Components/ActivityIndicator';
const LoginScreen = ({ navigation }) => {
    const [errorMessage, setErrorMessage] = useState();
    const [login, setLogin] = useState();
    const dispatch = useDispatch();
    const { error } = useSelector(state => state.userReducer);
    //const { user } = useSelector(state => state.userReducer);
    let user = userState()
    const message = "Error...please check email or password";



    const validationSchema = Yup.object().shape({
        password: Yup.string().required().min(1).label("Password"),
        email: Yup.string().required().email().min(1).label("Email"),
    })

    return console.log(user.token + '  token value now...') || (
        <Screen style={error === message ? styles.container : !login ? styles.container : styles.success}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />

            <Formik
                initialValues={{ email: " ", password: " ", }}
                onSubmit={values => {

                    setLogin(true);
                    //dispatch(updateErrorMessage());
                    dispatch(loginUserAction(values))
                    //navigation.navigate("")
                    console.log("Logged in user below")
                    console.log(values);
                    console.log("response below");
                    console.log("Error from form below:")
                    console.log(error);
                    console.log("Error from form above:")
                    console.log("User token from form below");
                    console.log(user.token);
                    if (error === message) {
                        dispatch(updateErrorMessageAction());
                    }


                }}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => (
                    <>

                        <AppTextInput
                            name="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="email"
                            textContentType="emailAddress"
                            usingFormik

                        />
                        <AppTextInput
                            name="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="password"
                            textContentType="password"
                            secureTextEntry
                            usingFormik

                        />

                        <TouchableOpacity onPress={handleSubmit} style={{ justifyContent: "center", alignItems: "center", backgroundColor: colors.primary, width: "100%", height: 45, borderRadius: 35 }}>
                            <Text style={{ color: "white" }}>LOG IN</Text>
                        </TouchableOpacity>

                        {error === message && (
                            <View style={{ marginTop: 150, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 24, color: "red" }}>{error}</Text>
                            </View>
                        )}


                    </>
                )}
            </Formik>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,


    },
    success: {
        opacity: .2,
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: "center",
    },
    button: {
        marginTop: 90,
    },

})

export default LoginScreen;
