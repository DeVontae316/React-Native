const initialState = {
    description: {},
    update: {},
    messages: ""
}

export const practiceReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_FORM":
            return {
                ...state,
                description: {
                    ...payload
                }
            }
        case "ADD_UPDATE":
            return {
                ...state,
                update: {
                    ...payload
                }
            }
        case "DELETE":
            return {
                ...state,
                messages: payload
            }
        default:
            return state;
    }
}