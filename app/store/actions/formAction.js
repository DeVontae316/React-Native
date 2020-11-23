

export const addFormTestAction = (values) => {
    return { type: "ADD_FORM_SAGA", payload: values }
}

export const addFormUpdate = (x, y) => {
    return {
        type: "ADD_FORM_UPDATE_SAGA",
        payload: { id: x, description: y },
    }
}
export const addDeleteForm = (value) => {
    return { type: "ADD_DELETE_FORM_SAGA", payload: { id: value } }
}


