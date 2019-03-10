import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDmyvSYEBNC4ryv3lsxw449L8NdXvtR2-8",
  authDomain: "post-box-firebase.firebaseapp.com",
  databaseURL: "https://post-box-firebase.firebaseio.com",
  projectId: "post-box-firebase",
  storageBucket: "post-box-firebase.appspot.com",
  messagingSenderId: "579592629732"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots:true });

export default firebase;
