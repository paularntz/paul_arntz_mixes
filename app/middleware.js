import { NextResponse } from 'next/server';

export function middleware(req) {
  const { pathname } = req.nextUrl;
  console.log(`Middleware running for pathname: ${pathname}`); // Add this line

  // Allow public access to /messages/contact
  if (pathname.startsWith('/messages/contact')) {
    console.log('Public access to /messages/contact allowed'); // Add this line
    return NextResponse.next();
  }

  // Protect the /messages route (and sub-routes except /contact)
  if (pathname.startsWith('/messages')) {
    const auth = req.cookies.get('auth-token'); // Check for an auth cookie
    console.log(`Auth token: ${auth}`); // Add this line

    if (!auth) {
      const url = req.nextUrl.clone();
      url.pathname = '/login'; // Redirect to your login page if not authenticated
      console.log('Redirecting to /login'); // Add this line
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next(); // Continue if authenticated or not accessing /messages
}
