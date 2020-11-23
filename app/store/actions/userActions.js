

export const registerUserAction = (values) => {
    return { type: "REGISTER_USER_SAGA", payload: values }
}

export const logoutUserAction = (user) => {
    return { type: "LOGOUT_USER_SAGA", payload: user }
}

export const loginUserAction = (values) => {
    return { type: "LOGIN_USER_SAGA", payload: values }
}

export const updateErrorMessageAction = () => {
    return { type: "UPDATE_ERROR_MESSAGE" }
}




