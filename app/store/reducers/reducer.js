const initialState = {
    user: {},
    error: undefined,

}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case "REGISTER_USER":
            return {
                ...state,
                user: payload,
            }
        case "LOGIN_USER":
            return {
                ...state,
                user: { token: payload.token, name: payload.name },
            }
        case "LOGIN_USER_ERROR":
            return {
                ...state,
                error: payload,
            }
        case "UPDATE_ERROR_MESSAGE":
            return {
                ...state,
                error: undefined
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user: payload,
            }

        default:
            return state
    }
}
