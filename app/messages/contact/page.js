// app/messages/contact/page.js
"use client"

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      });
      
      // Redirect to thank you page
      window.location.href = '/messages/thank-you';
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div style={{ marginBottom: 50 }}>
        <h1 className="text-3xl font-bold mb-6">Call Me: (615) 390-3848</h1>
        <h1 className="text-3xl font-bold mb-6">Leave A Message:</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        
        <div>
          <label htmlFor="name" className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full p-2 border rounded text-black disabled:bg-gray-200"
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
            disabled={isSubmitting}
            className="w-full p-2 border rounded text-black disabled:bg-gray-200"
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
            disabled={isSubmitting}
            className="w-full p-2 border rounded text-black disabled:bg-gray-200"
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
            disabled={isSubmitting}
            className="w-full p-2 border rounded text-black disabled:bg-gray-200"
            rows="5"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
