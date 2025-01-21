import { NextResponse } from 'next/server';

export function middleware(req) {
  // Get the requested pathname
  const { pathname } = req.nextUrl;

  // Define the paths that need protection
  const protectedPath = '/messages';
  const openPath = '/messages/contact';

  // Check if the user is already authenticated
  const isAuthenticated = req.cookies.get('authorized');

  // If the path is /messages but not /messages/contact
  if (pathname.startsWith(protectedPath) && pathname !== openPath) {
    // If the user is not authenticated, redirect to the login page or show a password prompt
    if (!isAuthenticated) {
      const loginUrl = new URL('/login', req.url); // Assuming you have a /login page for password entry
      return NextResponse.redirect(loginUrl);
    }
  }

  // Allow the request to proceed if no protection is needed
  return NextResponse.next();
}