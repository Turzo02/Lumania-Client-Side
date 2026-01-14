"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
      window.location.href = '/login';
    }
  };

  useEffect(() => {
    const mockUserData = {
      name: 'Admin User',
      email: 'admin@lumina.com',
      role: 'Administrator',
      memberSince: 'January 2026',
      avatar: null,
    };

    setTimeout(() => {
      setUserData(mockUserData);
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <main className="bg-[#0A0A0A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-zinc-800 rounded w-48 mb-8"></div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="h-32 bg-zinc-800 rounded-full w-32 mb-4"></div>
              <div className="h-4 bg-zinc-800 rounded w-64 mb-2"></div>
              <div className="h-4 bg-zinc-800 rounded w-48"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-zinc-200 mb-8">Profile</h1>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center space-x-6 mb-8">
            <div className="relative h-32 w-32 bg-zinc-700 rounded-full flex items-center justify-center overflow-hidden">
              {userData.avatar ? (
                <Image 
                  src={userData.avatar} 
                  alt={userData.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-4xl font-bold text-zinc-400">
                  {userData.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-zinc-200 mb-2">{userData.name}</h2>
              <p className="text-zinc-400 mb-1">{userData.email}</p>
              <p className="text-sm text-lime-400 font-medium">{userData.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-zinc-200 mb-3">Account Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Member Since:</span>
                  <span className="text-zinc-200">{userData.memberSince}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Account Type:</span>
                  <span className="text-zinc-200">{userData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Status:</span>
                  <span className="text-lime-400 font-medium">Active</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-zinc-200 mb-3">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-200 rounded-md transition-colors">
                  Edit Profile
                </button>
                <button className="w-full px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-200 rounded-md transition-colors">
                  Change Password
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md transition-colors"
                >
                  Logout
                </button>
                <button className="w-full px-4 py-2 bg-red-900 hover:bg-red-800 text-white rounded-md transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-zinc-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-zinc-200 mb-3">Recent Activity</h3>
            <div className="space-y-2">
              <div className="text-zinc-400 text-sm">
                <span className="text-zinc-300">Logged in</span> - 2 hours ago
              </div>
              <div className="text-zinc-400 text-sm">
                <span className="text-zinc-300">Updated profile</span> - 3 days ago
              </div>
              <div className="text-zinc-400 text-sm">
                <span className="text-zinc-300">Changed password</span> - 1 week ago
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
