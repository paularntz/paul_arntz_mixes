import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

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

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();
    const timestamp = new Date().toISOString();

    await addDoc(collection(db, 'messages'), {
      name,
      email,
      phone,
      message,
      date: timestamp,
    });

    return new Response(JSON.stringify({ status: 'success' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing message:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
