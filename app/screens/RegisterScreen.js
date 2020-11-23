import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { AppSubmitButton, AppFormField } from '../Components/forms';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppTextInput from '../Components/AppTextInput';
import Screen from '../Components/Screen';
import { registerUserAction } from '../store/actions/userActions';

const RegisterScreen = () => {
    const dispatch = useDispatch();



    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(1).label("Name"),
        email: Yup.string().required().min(15).email().label("Email"),
        password: Yup.string().required().min(1).label("Password"),
    })
    return (
        <Screen>

            <Formik
                initialValues={{ name: " ", email: " ", password: " " }}
                onSubmit={(values) => {
                    dispatch(registerUserAction(values));

                }}
            //validationSchema={validationSchema}
            >
                {() => (
                    <>
                        <AppTextInput
                            name="name"
                            placeholder="Name"
                            icon="person"
                            usingFormik
                        />
                        <AppTextInput
                            name="email"
                            placeholder="Email"
                            icon="email"
                            usingFormik
                        />
                        <AppTextInput
                            name="password"
                            placeholder="Password"
                            icon="lock"
                            usingFormik
                        />
                        <AppSubmitButton
                            title="Register"
                        />

                    </>
                )}

            </Formik>
        </Screen>
    );
}

export default RegisterScreen;