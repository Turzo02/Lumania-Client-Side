"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react"; // NEW: Imported User icon

// NEW: A separate component for the profile dropdown menu to keep code clean
const ProfileMenu = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div 
      className="relative"
      onClick={() => setIsProfileMenuOpen(true)}
    >
      <button className="flex items-center justify-center h-10 w-10 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors">
        <User className="h-5 w-5 text-zinc-300" />
      </button>
      
      {isProfileMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-zinc-800  shadow-lg py-1 z-50">

          <Link href="/logout" className="block px-4 py-2 text-sm border border-lime-400  rounded-lg text-zinc-300 hover:bg-zinc-700 hover:text-lime-400">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/items", label: "All Items" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <>
      <header className="bg-[#27272a] z-50 sticky top-0">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 border-b border-zinc-800/50 backdrop-blur-lg">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="text-2xl font-bold tracking-tighter text-zinc-200"
          >
            Lumina
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-md font-bold transition-colors ${
                      isActive
                        ? "bg-lime-400 text-[#0F253E]"
                        : "text-zinc-400 hover:text-lime-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          <div className="flex items-center gap-4"> {/* NEW: Added gap-4 for spacing */}
            
            {/* NEW: Conditional Login/Profile section for Desktop */}
            <div className="hidden md:flex">
                {isLoggedIn ? (
                    <ProfileMenu />
                ) : (
                    <Link href="/login" className="px-4 py-2 rounded-md text-md font-bold text-zinc-950 bg-lime-400 hover:bg-lime-300 transition-colors">
                        Login
                    </Link>
                )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-0 z-40
          bg-[#0A0A0A]/95
          backdrop-blur-sm
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="mt-24 flex flex-col items-center">
          <ul className="flex flex-col items-center gap-6 w-full px-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={`mobile-${link.href}`} className="w-full text-center">
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block py-3 rounded-lg text-2xl font-semibold transition-all ${
                      isActive
                        ? "bg-lime-500 text-black"
                        : "text-zinc-200 hover:text-lime-400"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            
            {/* NEW: Separator and Login/Logout for Mobile Menu */}
            <li className="w-full pt-4 mt-4 border-t border-zinc-700">
              {isLoggedIn ? (
                  <div className="flex flex-col gap-4 text-center">
                    
                      <Link href="/logout" onClick={handleLinkClick} className="text-xl font-semibold text-zinc-200">Logout</Link>
                  </div>
              ) : (
                <Link href="/login" onClick={handleLinkClick} className="block w-full py-3 rounded-lg text-xl font-bold bg-lime-400 text-zinc-950 text-center">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
