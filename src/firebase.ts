import firebase from 'firebase/app';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCfFx5cG-Z461dPxv7gtfottPZbZR0SVV0",
    authDomain: "lab1-dbee4.firebaseapp.com",
    projectId: "lab1-dbee4",
    storageBucket: "lab1-dbee4.appspot.com",
    messagingSenderId: "703681612269",
    appId: "1:703681612269:web:82876a20d73946393bbfe4",
    measurementId: "G-8GJH5CCFG7"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
