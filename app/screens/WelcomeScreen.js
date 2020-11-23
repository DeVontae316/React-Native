import React from 'react';
import { Alert, ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from '../Components/AppButton';
import { NavigationContainer } from '@react-navigation/native';


const WelcomeScreen = ({ navigation }) => {


    return (
        <ImageBackground
            blurRadius={8}
            source={require("../assets/background.jpg")}
            style={styles.background}
        >
            <View style={styles.butttonContainer}>
                <AppButton onPress={() => navigation.navigate("Login")} title="Login" />
                <AppButton color="secondary" onPress={() => navigation.navigate("Register")} title="Register" />

            </View>


            <View style={styles.logoAndTextContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")}
                />
                <Text style={styles.logoText}>Sell stuff you don't need</Text>
            </View>


        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",



    },
    butttonContainer: {
        marginBottom: 25,
        width: "100%",


    },


    logoAndTextContainer: {
        position: "absolute",
        top: 50,
        alignItems: "center",
        width: "100%",
        height: 100,



    },
    logo: {
        width: 100,
        height: 100
    },
    logoText: {
        fontSize: 25,
        fontWeight: "500",
        paddingVertical: 20,
    }




})

export default WelcomeScreen;

/*

dimensions:
width: "100%",
height: 70,

color codes:
"#4ecdc4"(login)
"#fc5c65"(register)

Why did logo shift to left when we put it in a contianer?

Because the the container is set to flex start on the horizontal axis(secondary).

*/