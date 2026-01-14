import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const sessionCookie = request.cookies.get('session');
    
    if (sessionCookie && sessionCookie.value === 'true') {
      return NextResponse.json({ isLoggedIn: true });
    }
    
    return NextResponse.json({ isLoggedIn: false });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
