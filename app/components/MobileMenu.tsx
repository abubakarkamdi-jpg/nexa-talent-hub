'use client';

import { useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        id="mobile-menu-btn"
        className="md:hidden text-gray-300 hover:text-white"
        aria-label="Toggle menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {open && (
        <div id="mobile-menu" className="md:hidden bg-slate-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block py-2 text-gray-300 hover:text-primary-400">
              Home
            </a>
            <a href="#categories" className="block py-2 text-gray-300 hover:text-primary-400">
              Categories
            </a>
            <a href="#vendors" className="block py-2 text-gray-300 hover:text-primary-400">
              Vendors
            </a>
            <a href="#promo" className="block py-2 text-gray-300 hover:text-primary-400">
              Promotions
            </a>
            <a href="#how-it-works" className="block py-2 text-gray-300 hover:text-primary-400">
              How It Works
            </a>
            <hr className="border-gray-700" />
            <a href="https://nexamarketplace-main.vercel.app" className="block w-full py-2.5 text-gray-300 hover:text-white text-center">Sign In</a>
            <a href="https://nexamarketplace-main.vercel.app" className="block w-full py-2.5 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full font-semibold text-center">
              Join Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
