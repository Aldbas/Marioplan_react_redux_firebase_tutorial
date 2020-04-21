import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

{/* <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script> */ }


var firebaseConfig = {
    apiKey: "AIzaSyCEfnLEkHyLcn1cHP_KyW5_Z5l6GWAR1Ew",
    authDomain: "ab-marioplan-46641.firebaseapp.com",
    databaseURL: "https://ab-marioplan-46641.firebaseio.com",
    projectId: "ab-marioplan-46641",
    storageBucket: "ab-marioplan-46641.appspot.com",
    messagingSenderId: "996844514481",
    appId: "1:996844514481:web:17dbbaaf8557f0251b8690",
    measurementId: "G-CDTYTW4QWX",
    userProfile: 'users',
    useFirestoreForProfile: true,

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;