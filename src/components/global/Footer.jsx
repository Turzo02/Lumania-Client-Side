import React from "react";
import Link from "next/link";
import { Github, Twitter,  Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Linkedin", icon: Linkedin, href: "#" },
  ];

  const footerNavLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/" },
    { name: "Privacy Policy", href: "/" },
    { name: "Terms of Service", href: "/" },
  ];

  return (
    <footer className="bg-[#27272a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-zinc-200"
            >
              Lumina
            </Link>
            <p className="text-sm mt-1 text-zinc-400">
              A curated marketplace for minimalist and avant-garde lighting.
            </p>
          </div>

          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium flex-1">
            {footerNavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-zinc-400 hover:text-lime-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex justify-center items-center gap-6 flex-1">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="text-zinc-400 hover:text-lime-400 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t  text-center text-sm font-bold text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Lumina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
