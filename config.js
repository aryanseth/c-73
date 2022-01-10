import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {

  apiKey: "AIzaSyC0PAZJ7mWZORbuw362mMDtIPK9YHjHugo",
  authDomain: "project-73-b1941.firebaseapp.com",
  projectId: "project-73-b1941",
  storageBucket: "project-73-b1941.appspot.com",
  messagingSenderId: "686721648405",
  appId: "1:686721648405:web:dd2c001592e92600270b1c"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

