import colors from './colors';
export default {
    textInput: {
        width: "90%",
        fontSize: 18,
        color: colors.dark,
        marginHorizontal: 10,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    colors
}