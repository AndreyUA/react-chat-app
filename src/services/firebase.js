import firebase from "firebase";

const config = {
    apiKey: "AIzaSyB5u9cTOiDXH-NuTHjHUXdsRZCsIxR5690",
    authDomain: "react-chat-app-c7714.firebaseapp.com",
    databaseURL: "https://react-chat-app-c7714.firebaseio.com",
    projectId: "react-chat-app-c7714",
    storageBucket: "react-chat-app-c7714.appspot.com",
    messagingSenderId: "672053554626",
    appId: "1:672053554626:web:78e912a723a97cf5517a5b"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();