import React from "react";
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';


import { Practice, AppSubmitButton } from "../Components/forms";







const PracticeScreen = () => {
    const validationSchema = Yup.object().shape({
        password: Yup.string().required().min(10).label("Password"),
        email: Yup.string().required().min(20).email().label("Email"),
    })

    return (
        <Formik
            initialValues={{ email: " ", password: " " }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            {() => (
                <>
                    <Practice
                        icon="email-multiple-outline"
                        placeholder="Email"
                        name="email"
                    />
                    <Practice
                        icon="lock-open-outline"
                        placeholder="Password"
                        name="password"
                        secureTextEntry
                    />

                    <AppSubmitButton title={"Log In"} />

                </>

            )}

        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {},

});


export default PracticeScreen;