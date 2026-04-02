import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseConfig } from '../../../lib/firebase-config';

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
