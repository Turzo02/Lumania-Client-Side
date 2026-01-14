"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleDemoCredentials = () => {
    setEmail(process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@lumina.com');
    setPassword(process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'password123');
  };

  const handleLoginSuccess = () => {
    router.push('/');
    router.refresh();
    window.dispatchEvent(new CustomEvent('loginSuccess'));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        handleLoginSuccess();
      } else {
        const data = await response.json();
        setError(data.message || 'Invalid credentials.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <main className="bg-[#0A0A0A] min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-md w-full px-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
          <h1 className="text-center text-3xl font-bold text-zinc-200">Login</h1>
          <p className="text-center text-zinc-400 mt-2">Access your dashboard.</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full bg-zinc-800 border-zinc-700 rounded-md p-3 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full bg-zinc-800 border-zinc-700 rounded-md p-3 text-white"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button type="submit" className="w-full py-3 rounded-md bg-lime-400 text-zinc-950 font-bold hover:bg-lime-300 transition-colors">
                Sign In
              </button>
            </div>
            <div className="mt-3">
              <button 
                type="button" 
                onClick={handleDemoCredentials}
                className="w-full py-3 rounded-md bg-zinc-700 text-zinc-300 font-medium hover:bg-zinc-600 transition-colors text-sm"
              >
                Fill Demo Credentials
              </button>
            </div>
          </form>
          <p className="text-center text-xs text-zinc-500 mt-4">
            (Use email: <span className="font-mono">{process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@lumina.com'}</span>, pass: <span className="font-mono">••••••••</span>)
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
