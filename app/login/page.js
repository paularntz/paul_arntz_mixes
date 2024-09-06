"use client"
import { useState, useEffect } from 'react';
//import { useRouter } from 'next/router'; // Always import useRouter
import Cookies from 'js-cookie';

export default function Login() {
  const [password, setPassword] = useState('wrongpass');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure that this component is only rendered client-side
    setIsMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'PPdaGnd24!') {
      Cookies.set('authorized', 'true', { expires: 1 }); // Set the cookie for 1 day
      
      alert('Going back to the previous page');

      // Take the user back one page in history
      window.history.back();

    } else {
      alert('Incorrect password');
    }
  };

  if (!isMounted) {
    return null; // Avoid rendering until client-side mounting is confirmed
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Password Protected</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}