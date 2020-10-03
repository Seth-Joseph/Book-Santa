import firebase from 'firebase';

require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyDus4YA4HUw_uvw4cqgHmK5f4LVBP0XV4k",
    authDomain: "bookssanta-a3cf8.firebaseapp.com",
    databaseURL: "https://bookssanta-a3cf8.firebaseio.com",
    projectId: "bookssanta-a3cf8",
    storageBucket: "bookssanta-a3cf8.appspot.com",
    messagingSenderId: "1046375561949",
    appId: "1:1046375561949:web:a0f515d0c2434a6afcf934"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()