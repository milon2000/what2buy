import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBhSoOl-lqFd0QO1UNrMEwoYgJ6X7VZN0g",
    authDomain: "what2buy-ef772.firebaseapp.com",
    databaseURL: "https://what2buy-ef772.firebaseio.com",
    projectId: "what2buy-ef772",
    storageBucket: "what2buy-ef772.appspot.com",
    messagingSenderId: "1034795788281",
    appId: "1:1034795788281:web:0e7f81cf7b67421c5a7f28",
    measurementId: "G-75Q44KK56K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
