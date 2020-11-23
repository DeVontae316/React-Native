import React from 'react';
import { Formik } from 'formik';

const AppForm = ({ validationSchema, intialValues, onSubmit, children }) => {
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={intialValues}
            onSubmit={onSubmit}
        >
            {() => <>{children}</>}

        </Formik>
    );
}

export default AppForm;
