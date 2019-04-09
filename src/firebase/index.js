import firebase from 'firebase/app';
import 'firebase/storage';  

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAMlGgi-66QxDfvEm3nsgTcV02wtXOsIOM",
    authDomain: "imagestorageuser.firebaseapp.com",
    databaseURL: "https://imagestorageuser.firebaseio.com",
    projectId: "imagestorageuser",
    storageBucket: "imagestorageuser.appspot.com",
    messagingSenderId: "302780102117"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }