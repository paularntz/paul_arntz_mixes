"use client"
import { useState, useEffect } from 'react';

// Check if session is still valid
const isSessionValid = () => {
    if (typeof window === 'undefined') return false;
    
    const expiryTime = localStorage.getItem('authExpiry');
    if (!expiryTime) return false;
    
    return parseInt(expiryTime) > Date.now();
};

export function PasswordProtect({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Check authentication on component mount
    useEffect(() => {
        if (isSessionValid()) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.toLowerCase() === 'stevie') {
            // Set expiry to 1 hour from now
            const expiryTime = Date.now() + (60 * 60 * 1000);
            localStorage.setItem('authExpiry', expiryTime.toString());
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password');
            setPassword('');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold text-center">Protected Content</h2>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter password"
                            />
                        </div>
                        {error && (
                            <p className="text-red-500 text-sm text-center">{error}</p>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Access Content
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return children;
}
