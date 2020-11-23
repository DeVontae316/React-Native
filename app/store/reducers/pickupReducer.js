const initialState = {
    pickup: {},

}

export const pickupReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ADD_PICKUP':
            return {
                ...state,
                pickup: payload,
            }
        case 'RESET_PICKUP':
            return {
                ...state,
                pickup: {},
            }

        default:
            return state
    }
}