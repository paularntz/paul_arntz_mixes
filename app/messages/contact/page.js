"use client"

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.target);
    
    try {
      await fetch("/contact-form.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      
      // Show success message
      alert('I have received your message and will get back to you ASAP.\n\nThank You,\nPaul');
      
      // Reset form
      event.target.reset();
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

      <form name="contact" onSubmit={handleFormSubmit} className="space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        
        <div>
          <label htmlFor="name" className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
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
