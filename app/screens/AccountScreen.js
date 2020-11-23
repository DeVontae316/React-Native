import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Screen from '../Components/Screen';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from '../Components/ListItem';
import colors from '../config/colors';
import Icon from '../Components/Icon';
import ListItemDeleteAction from '../Components/ListItemDeleteAction';
import navigationTheme from '../Navigation/navigationTheme';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { logoutUserAction } from '../store/actions/userActions';


const serverData = [
    {
        title: "My Messages",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
        screen: "Messages",
    },
    {
        title: "My Listing jabroni",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        }
    },
]
const AccountScreen = ({ navigation }) => {
    const { user } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();


    return (
        <Screen style={styles.screenContainer}>
            <View style={styles.listContainer}>
                <ListItem title="Bob the builder" subTitle="Bobbuilds@gmail.com" image={require("../assets/mosh.jpg")} />
            </View>

            <View style={styles.flatListContainer}>
                <FlatList
                    data={serverData}
                    keyExtractor={i => i.title}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() => navigation.navigate(item.screen)}
                            renderRightActions={() => <ListItemDeleteAction />}
                            title={item.title}
                            iconComponent={<Icon name={item.icon.name} iconColor="white" backgroundColor={item.icon.backgroundColor} />}
                        />
                    )}
                />
            </View>


            <View style={styles.listContainer2}>
                <ListItem
                    onPress={() => dispatch(logoutUserAction(user))}
                    title="Log out"
                    iconComponent={<Icon backgroundColor="#ffe66d" name="logout" iconColor="white" />}
                />
            </View>


        </Screen>


    );
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: colors.lightGrey,


    },
    listContainer: {
        marginVertical: 40,
        backgroundColor: "white",
    },
    listContainer2: {
        marginTop: 40,
        backgroundColor: "white",
    },
    flatListContainer: {
        backgroundColor: "white",
    }
})

export default AccountScreen;