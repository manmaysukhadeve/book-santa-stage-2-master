import firebase from 'firebase';
require('@firebase/firestore')


  
  var firebaseConfig = {
    apiKey: "AIzaSyD04R53psMLyFs7rpqa8y5tr5tNZmeyML4",
    authDomain: "class-78-1b2ee.firebaseapp.com",
    projectId: "class-78-1b2ee",
    storageBucket: "class-78-1b2ee.appspot.com",
    messagingSenderId: "603047392726",
    appId: "1:603047392726:web:bc1527e93e4e0fad67e077"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
