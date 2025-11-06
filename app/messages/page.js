// app/messages/page.js
"use client"
import { useEffect } from 'react';

export default function MessagesPage() {
  useEffect(() => {
    // Redirect to contact page since messages are now handled via Netlify Forms
    window.location.href = '/messages/contact';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg className="w-8 h-8 text-white animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white mb-4">Redirecting to Contact...</h1>
        <p className="text-gray-400">If you are not automatically redirected, <a href="/messages/contact" className="text-blue-400 hover:text-blue-300">click here</a>.</p>
      </div>
    </div>
  );
}

