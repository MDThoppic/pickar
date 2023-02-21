import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const firebaseConfig = {
    apiKey: "AIzaSyAMrYKQ7u5TNE_oco-VM15K_4qwnVdKs1w",
    authDomain: "pickaar-dev.firebaseapp.com",
    projectId: "pickaar-dev",
    storageBucket: "pickaar-dev.appspot.com",
    messagingSenderId: "608660828904",
    appId: "1:608660828904:web:23042571253cd8028f0f5d",
    measurementId: "G-F2Y5YENGB5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}