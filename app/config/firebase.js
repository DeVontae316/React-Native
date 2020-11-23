import * as firebase from 'firebase';




var firebaseConfig = {
    apiKey: "AIzaSyB7k6bZkNI2tXkZFXoktVLmmlIbtvMxvCo",
    authDomain: "social-app-2f25e.firebaseapp.com",
    databaseURL: "https://social-app-2f25e.firebaseio.com",
    projectId: "social-app-2f25e",
    storageBucket: "social-app-2f25e.appspot.com",
    messagingSenderId: "91711423764",
    appId: "1:91711423764:web:55950248f467aedf69ae01"
};
// Initialize Firebase
const FireBase = firebase.initializeApp(firebaseConfig);

export default FireBase;