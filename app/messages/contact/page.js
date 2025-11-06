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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your audio vision to life? I'd love to hear about your project 
            and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              {/* Phone */}
              <a href="tel:6153903848" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-200 cursor-pointer group no-underline">
                <div className="bg-blue-500/20 p-3 rounded-lg group-hover:bg-blue-500/30 transition-all duration-200">
                  <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Call me directly</p>
                  <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    (615) 390-3848
                  </p>
                </div>
              </a>

              {/* Form link */}
              <div 
                onClick={() => {
                  const form = document.querySelector('#contact-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                    const firstInput = form.querySelector('input');
                    if (firstInput) firstInput.focus();
                  }
                }}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-all duration-200">
                  <svg className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Or send a message</p>
                  <p className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">Use the form →</p>
                </div>
              </div>

              {/* Response time - info only, no link */}
              <div className="flex items-center space-x-4 p-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Response time</p>
                  <p className="text-xl font-semibold text-white">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            
            <form id="contact-form" name="contact" onSubmit={handleFormSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-800 disabled:cursor-not-allowed transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-800 disabled:cursor-not-allowed transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-gray-500">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-800 disabled:cursor-not-allowed transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  disabled={isSubmitting}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-800 disabled:cursor-not-allowed transition-colors resize-vertical"
                  placeholder="Tell me about your project... What type of audio work do you need? Timeline? Budget? Any specific requirements or vision you have in mind?"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-blue-500 disabled:hover:to-purple-600 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All inquiries are confidential and will be responded to within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}
