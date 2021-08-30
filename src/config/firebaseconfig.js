import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBLEU0B7JEkxHlqDPcce6dh6pAcuR-9mCY",
  authDomain: "task-bc37f.firebaseapp.com",
  projectId: "task-bc37f",
  storageBucket: "task-bc37f.appspot.com",
  messagingSenderId: "238375853575",
  appId: "1:238375853575:web:61091470d7c046db4f54a2"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
  export default database;