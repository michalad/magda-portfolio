"use client";

import { useState } from "react";
import Image from "next/image";

const basePath = process.env.NODE_ENV === 'production' ? '/magda-portfolio' : '';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Image src={`${basePath}/profile-logo-wordmark.svg`} alt="Magdalena montuje" width={160} height={40} className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-amber-800 transition-colors"
              >
                Start
              </a>
              <a
                href="/#about"
                className="text-gray-700 hover:text-amber-800 transition-colors"
              >
                O mnie
              </a>
              <a
                href="/#portfolio"
                className="text-gray-700 hover:text-amber-800 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="/poradniki"
                className="text-gray-700 hover:text-amber-800 transition-colors"
              >
                Poradnik
              </a>
              <a
                href="/#contact"
                className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Start
            </a>
            <a
              href="/#about"
              className="block px-3 py-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              O mnie
            </a>
            <a
              href="/#portfolio"
              className="block px-3 py-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="/poradniki"
              className="block px-3 py-2 text-gray-700 hover:text-amber-800 hover:bg-amber-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Poradnik
            </a>
            <a
              href="/#contact"
              className="block px-3 py-2 bg-amber-800 text-white hover:bg-amber-900 rounded-md text-center"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
