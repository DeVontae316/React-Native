import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import AppFormPicker from '../Components/forms/AppFormPicker';
import AppPicker from '../Components/AppPicker';
import AppTextInput from '../Components/AppTextInput';
import { AppSubmitButton } from '../Components/forms';
import AppCategoryPickerItem from '../Components/AppCategoryPickerItem';
import FormImageListInput from '../Components/images/FormImageListInput';
import Screen from '../Components/Screen';
import useLocation from '../Hooks/useLocation';
import { addPickupAction } from '../store/actions/pickupActions';
import { resetPickupAction } from '../store/actions/pickupActions';
import { ScrollView, Text, Button, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import navigationTheme from '../Navigation/navigationTheme';



const items = [
    { label: "Clothes", value: 1, backgroundColor: "red", icon: "apps" },
    { label: "Clothes", value: 2, backgroundColor: "red", icon: "car-sports" },
    { label: "furniture", value: 3, backgroundColor: "green", icon: "email" },
    { label: "Other", value: 4, backgroundColor: "blue", icon: "library-books" },
    { label: "Clothes", value: 5, backgroundColor: "tomato", icon: "apps" },
    { label: "furniture", value: 6, backgroundColor: "purple", icon: "email" },
    { label: "Other", value: 7, backgroundColor: "blue", icon: "lock" },
    { label: "Clothes", value: 8, backgroundColor: "red", icon: "apps" },
    { label: "furniture", value: 9, backgroundColor: "green", icon: "email" },
    { label: "Other", value: 10, backgroundColor: "yellow", icon: "lock" },

]

const ListingEditScreen = ({ navigation }) => {

    const [listEditScreen, setListEditScreen] = useState(true);
    const [uploading, setloading] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const { pickup } = useSelector(state => state.pickupReducer);




    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.string().required().min(1).max(1000).label("Price"),
        description: Yup.string().required().label("Description"),
        category: Yup.string().required().nullable().min(1).label("Category"),
        photos: Yup.array().min(1, "Please select at least one photo",)
    })

    return console.log(pickup.message + ' my payload here...') || (

        <ScrollView>
            {listEditScreen ? (
                <Screen>
                    <Formik
                        initialValues={{
                            category: null,
                            title: "",
                            price: "",
                            description: "",
                            photos: [],
                        }}
                        onSubmit={values => {
                            dispatch(addPickupAction(values));
                            setloading(true);
                            setListEditScreen(false)
                            //navigation.navigate("UploadResultsScreen", pickup.message);
                            //setPayLoad(pickup)
                            /*console.log("values below");
                            console.log(values)
                            console.log("photo uri below")
                            console.log(values.photos[0]);
                            console.log("photo uri ends");*/
                            console.log("payload below");

                            console.log("payload above")

                        }}
                    //validationSchema={validationSchema}
                    >
                        {() => (
                            <>
                                <FormImageListInput
                                    name="photos"

                                />
                                <AppTextInput
                                    placeholder="Title"
                                    usingFormik
                                    name="title"
                                    maxLength={255}
                                    autoCorrect={false}
                                    autoCompleteType={"off"}

                                />
                                <AppTextInput
                                    placeholder="Price"
                                    usingFormik
                                    width="50%"
                                    name="price"
                                    keyboardType="numeric"
                                    maxLength={8}
                                    autoCorrect={false}
                                    autoCompleteType={"off"}
                                />
                                <AppPicker
                                    items={items}
                                    name="category"
                                    width="75%"


                                />
                                <AppTextInput
                                    placeholder="Description"
                                    usingFormik
                                    name="description"
                                    multiline
                                    numberOflines={3}
                                    autoCorrect={false}
                                    autoCompleteType="off"
                                />

                                <AppSubmitButton title="Post" />
                            </>

                        )}
                    </Formik>
                </Screen>

            ) : !pickup.message ? (
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
                    loop={true}
                    source={require("../assets/animations/uploading.json")}
                />
            ) : pickup.message ? (
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
                            setListEditScreen(true);
                            console.log("Press me")
                        }}
                    >

                        <Text style={{ fontSize: 24, color: "green" }}>Add another pickup</Text>
                    </TouchableOpacity>


                </View>
            ) : <Text>Error</Text>

            }





        </ScrollView>

    );
}

export default ListingEditScreen;