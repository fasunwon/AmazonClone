// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBxNwJlLzVkjWSiGY6b9FejOrk21vPeKZc",
    authDomain: "clone-879e8.firebaseapp.com",
    projectId: "clone-879e8",
    storageBucket: "clone-879e8.appspot.com",
    messagingSenderId: "873676001561",
    appId: "1:873676001561:web:f60ab110c3461c4803b588",
    measurementId: "G-284C6H8254"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};