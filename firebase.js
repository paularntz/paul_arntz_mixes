// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKGD6ZG1XwrOTPiazyDYslIa9eZWe4A2A",
    authDomain: "paul-arntz-online-messages.firebaseapp.com",
    projectId: "paul-arntz-online-messages",
    storageBucket: "paul-arntz-online-messages.appspot.com",
    messagingSenderId: "397713359430",
    appId: "1:397713359430:web:ba63f398337d13d6be0047",
    measurementId: "G-NE23BBN2W7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, deleteDoc, doc };
