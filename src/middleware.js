// middleware.js
import { NextResponse } from 'next/server';
import nookies from 'nookies';

export default function middleware(req, res) {
  const cookies = req.headers.get('cookie');
  const isLoggedIn = cookies?.includes('next-auth.session-token');
  // Check for the presence of the token in cookies
  console.log('🔑 Auth token status:', isLoggedIn ? 'Present' : 'Missing');

  // If no token exists, redirect to the login page
  if (!isLoggedIn) {
    console.log('⚠️ No token found, redirecting to login');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  console.log('✅ Token verified, proceeding with request');
  // If the token is valid, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/profile', '/'], 
};
