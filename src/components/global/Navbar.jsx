"use client"; // Retained for mobile menu functionality

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the mobile menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* MAIN NAVBAR */}
      <header className="bg-[#27272a] z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 border-b border-zinc-800/50 bg-[#0A0A0A]/50backdrop-blur-lg">
          {/* Left Side: Logo */}
          <Link
            href="/"
            onClick={handleLinkClick}
            className="text-2xl font-bold tracking-tighter text-zinc-200"
          >
            Lumina
          </Link>

          {/* Center: Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-md  font-bold text-zinc-400 hover:text-lime-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side: Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-zinc-300 hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`
          md:hidden fixed inset-0 z-40
          bg-[#0A0A0A]/95 /* Near-opaque Abyss Black */
          backdrop-blur-sm
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="mt-24 flex flex-col items-center">
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={`mobile-${link.href}`}>
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-2xl font-semibold text-zinc-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
