import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"


const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: "dojo-blog-5ef10.firebaseapp.com",
    projectId: "dojo-blog-5ef10",
    storageBucket: "dojo-blog-5ef10.appspot.com",
    messagingSenderId: "899658077248",
    appId: "1:899658077248:web:e04ab90a8a1a191f337ba5"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timeStamp }