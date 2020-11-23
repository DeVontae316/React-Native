
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store, { persist_Store } from './app/store/store';
import { PersistGate } from 'redux-persist/es/integration/react';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Index from './utils';
import Screen from './app/Components/Screen';
import { Formik } from 'formik';
import { TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { createSearchQueries } from './app/store/sagas/Localhost/localhost'
import { FlatList } from 'react-native';
import Card from './app/Components/Card';
import SearchScreen from './app/screens/SearchScreen';








export default function App() {



  /*const handleKeyDown = (e) => {
     if (e.nativeEvent.key == "search") {
       return console.log("Bob press enter!!!");
     }
   }*/
  return (

    <Provider store={store}>
      <PersistGate persistor={persist_Store}>
        <Index />
      </PersistGate>
    </Provider>

  )






}






const styles = StyleSheet.create({

  searchBar: {
    backgroundColor: '#DCDCDC',
    width: "100%",
    height: 45,
    borderRadius: 25,
    padding: 15,
  }

})

