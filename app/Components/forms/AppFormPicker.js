import React from 'react';
import AppPicker from '../AppPicker';
import { useFormikContext } from 'formik';


const AppFormPicker = ({ placeholder, items, name }) => {
    const { errors, values, setFieldValue, touched } = useFormikContext()
    return (
        <AppPicker
            placeholder={placeholder}
            items={items}
            onSelectItem={item => setFieldValue(name, item)}
            selectedItem={values[name]}
        />
    );
}

export default AppFormPicker;