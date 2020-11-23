import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSelector, useDispatch } from 'react-redux';
import navigationTheme from '../Navigation/navigationTheme';
import { TouchableOpacity } from 'react-native';
import { resetPickupAction } from '../store/actions/pickupActions'

const UploadResultsScreen = ({ route }) => {
    const [getMessage, setMessage] = useState();
    const { pickup } = useSelector(state => state.pickupReducer);
    const dispatch = useDispatch();
    const message = route.params;


    return console.log(pickup.message + ' message from uploadScreen') || (

        <View style={styles.container}>
            {pickup.message ?
                <View>
                    <Text style={{ marginTop: 50, marginLeft: 105, fontSize: 24, color: "green" }}>Succesful upload</Text>
                    <LottieView
                        style={{
                            marginTop: 30,
                            marginLeft: 12,
                            height: 250,
                            width: 250,
                        }}
                        autoPlay
                        loop={false}
                        source={require("../assets/animations/success.json")}
                    />

                    <TouchableOpacity
                        style={{
                            marginTop: 200,
                            justifyContent: "center",
                            lignItems: "center",
                            marginLeft: 110,
                        }}
                        onPress={() => {
                            dispatch(resetPickupAction());
                            console.log("Press me")
                        }}
                    >

                        <Text style={{ fontSize: 24, color: "green" }}>Add another pickup</Text>
                    </TouchableOpacity>


                </View>
                : !pickup.message ?
                    <LottieView
                        style={{
                            marginTop: 100,
                            marginLeft: 42,
                            height: 200,
                            width: 200,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        autoPlay
                        loop={false}
                        source={require("../assets/animations/uploading.json")}
                    /> : <Text>Error</Text>
            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {},
})
export default UploadResultsScreen;