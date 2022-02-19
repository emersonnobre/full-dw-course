import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "keyqualquer",
    authDomain: "next-crud-31316.firebaseapp.com",
    projectId: "next-crud-31316",
    storageBucket: "next-crud-31316.appspot.com",
    messagingSenderId: "1040936313251",
    appId: "1:1040936313251:web:358352268d7468186aba16",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;