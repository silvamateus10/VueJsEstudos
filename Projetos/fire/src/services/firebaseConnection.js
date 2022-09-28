import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyD-nGkl2Xg6TDN8smznl1EU0E1UAymPzTw",
    authDomain: "vueapp-c00ed.firebaseapp.com",
    projectId: "vueapp-c00ed",
    storageBucket: "vueapp-c00ed.appspot.com",
    messagingSenderId: "23306306626",
    appId: "1:23306306626:web:593b03187348fe2790d9db",
    measurementId: "G-JYZ20T1XLX"
  };
  

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  