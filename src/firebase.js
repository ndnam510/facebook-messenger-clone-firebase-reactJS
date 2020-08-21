import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATjwT8NAilSpkpFjlDOffgRkxqdJEBUhY",
    authDomain: "facebook-messenger-clone-a15c0.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-a15c0.firebaseio.com",
    projectId: "facebook-messenger-clone-a15c0",
    storageBucket: "facebook-messenger-clone-a15c0.appspot.com",
    messagingSenderId: "934787017183",
    appId: "1:934787017183:web:110942f36d8462bb577c6a",
    measurementId: "G-3RGSV84NEZ"
  }
);
const db = firebaseApp.firestore();

export default db;