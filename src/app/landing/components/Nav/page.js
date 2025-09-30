"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-2xl">⌕</span>
        <span className="font-semibold text-lg text-[#282B31]">
          Kasuwan Gizo
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 text-gray-700 font-medium">
        <Link href="/" className="hover:text-green-500 transition">Home</Link>
        <Link href="/" className="hover:text-green-500 transition">Explore</Link>
        <Link href="/" className="hover:text-green-500 transition">About</Link>
        <Link href="/" className="hover:text-green-500 transition">Pricing</Link>
        <Link href="/" className="hover:text-green-500 transition">Contact</Link>

      </div>

      {/* Buttons (Desktop) */}
      <div className="hidden md:flex gap-4">
        <Link href="/signIN/login">
          <button className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
            Sign In
          </button>
        </Link>
        <Link href="/signIN/signup">
          <button className="px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-50">
          <div className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-medium">
            {/* Links */}
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-green-500 transition">Home</Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-green-500 transition">Explore</Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-green-500 transition">About</Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-green-500 transition">Pricing</Link>
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-green-500 transition">Contact</Link>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-6">
              <Link href="/signIN/login" onClick={() => setMenuOpen(false)}>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  Sign In
                </button>
              </Link>
              <Link href="/signIN/signup" onClick={() => setMenuOpen(false)}>
                <button className="w-full px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 transition">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
