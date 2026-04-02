// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { firebaseConfig } from './lib/firebase-config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, deleteDoc, doc };
