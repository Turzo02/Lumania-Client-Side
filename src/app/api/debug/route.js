import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const envVars = {
      ADMIN_EMAIL: process.env.ADMIN_EMAIL ? 'SET' : 'NOT SET',
      ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? 'SET' : 'NOT SET',
      NEXT_PUBLIC_ADMIN_EMAIL: process.env.NEXT_PUBLIC_ADMIN_EMAIL ? 'SET' : 'NOT SET',
      NODE_ENV: process.env.NODE_ENV || 'NOT SET',
    };

    return NextResponse.json({ 
      message: 'Environment variables debug',
      envVars,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Debug endpoint error:', error);
    return NextResponse.json({ error: 'Debug endpoint failed' }, { status: 500 });
  }
}
