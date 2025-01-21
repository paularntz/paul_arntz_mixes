// app/messages/page.js
"use client"
import { useState, useEffect } from 'react';
import { db, collection, getDocs, deleteDoc, doc } from '../../firebase'; // Import deleteDoc and doc

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Reference to the 'messages' collection
        const messagesCollection = collection(db, 'messages');
        // Fetch the documents
        const messageSnapshot = await getDocs(messagesCollection);
        // Extract the data
        const messageList = messageSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Set the state
        setMessages(messageList);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id) => {
    try {
      // Reference to the document to delete
      const messageDoc = doc(db, 'messages', id);
      // Delete the document
      await deleteDoc(messageDoc);
      // Remove the deleted message from state
      setMessages(messages.filter(message => message.id !== id));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((message) => (
            <li key={message.id} className="p-4 border rounded">
              <p><strong>Name:</strong> {message.name}</p>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Phone:</strong> {message.phone}</p>
              <p><strong>Message:</strong> {message.message}</p>
              <p><strong>Date:</strong> {message.date}</p>
              <button
                onClick={() => handleDelete(message.id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

