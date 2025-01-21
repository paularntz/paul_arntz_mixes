// app/messages/contact.js
"use client"

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('I have received your message and will get back to you ASAP.\n\nThank You,\nPaul');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div style={{ marginBottom: 50 }} >
      <h1 className="text-3xl font-bold mb-6">Call Me: (615) 390-3848</h1>
        <h1 className="text-3xl font-bold mb-6">Leave A Message:</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-semibold">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold">Message</label>
          <textarea
            name="message"
            id="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
            rows="5"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
