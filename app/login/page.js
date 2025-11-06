"use client"
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Login() {
  const [password, setPassword] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Ensure that this component is only rendered client-side
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (password === 'PPdaGnd24!') {
      Cookies.set('authorized', 'true', { expires: 1 }); // Set the cookie for 1 day
      
      // Show success message briefly before redirecting
      setTimeout(() => {
        window.history.back();
      }, 500);

    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Incorrect password. Please try again.');
      }, 300);
    }
  };

  if (!isMounted) {
    return null; // Avoid rendering until client-side mounting is confirmed
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 0h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Protected Content</h2>
            <p className="text-gray-400">Enter the password to access this content</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={isSubmitting}
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting || !password}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </>
              ) : (
                'Access Content'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <button 
              onClick={() => window.history.back()}
              className="text-gray-400 hover:text-gray-300 transition-colors text-sm"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}