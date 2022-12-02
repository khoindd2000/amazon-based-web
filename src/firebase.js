import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCR_MRp6S0rVny3RU0rb4mZ04mqyEsOjbo",
    authDomain: "clone-database.firebaseapp.com",
    projectId: "clone-database",
    storageBucket: "clone-database.appspot.com",
    messagingSenderId: "409049090424",
    appId: "1:409049090424:web:e47e5d7db813c33c48e08d",
    measurementId: "G-WJEZF5EZ51"
  };

//Set up everything from firebase to the app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//Set up database
const db = firebaseApp.firestore();

//set up authentication
const auth = firebase.auth();

export {db, auth};