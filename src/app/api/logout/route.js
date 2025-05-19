import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // Perform server-side logout logic, e.g., invalidate session
    // This depends on your authentication setup (e.g., JWT, sessions)
    // Example: Clear cookies if using cookie-based auth
    const response = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
    response.cookies.set('auth_token', '', { maxAge: 0 }); // Adjust cookie name as needed
    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json({ error: 'Failed to logout' }, { status: 500 });
  }
}