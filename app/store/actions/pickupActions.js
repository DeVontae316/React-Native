export const addPickupAction = (values) => {
    return { type: "ADD_PICKUP_SAGA", payload: values }
}
export const resetPickupAction = () => {
    return { type: "RESET_PICKUP_SAGA" }
}