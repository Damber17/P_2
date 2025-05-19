"use client"
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import Script from 'next/script';
import "./local.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            
        <Head>
        <title>Hotel REAL LIFE</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />

      <header>
        <div className="header-content">
          <h1>
            Hotel REAL LIFE<span className="stars">★★★★★</span>
          </h1>
          <p>Rinchending, Phuntsholing, Chhuka, Bhutan | Tel. +975 17 00 00 00</p>
        </div>
        <span>
          <Link href="/bookNow">
            <button id="btn">BOOK NOW</button>
          </Link>
        </span>
      </header>

       <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand - Add your logo here */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
              HOME
            </Link>
            <Link href="/rooms" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
              ROOMS
            </Link>
            <Link href="/dinning" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
              DINNING
            </Link>
            <Link href="/events" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
              EVENTS
            </Link>
            <Link href="/photos" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
              PHOTOS
            </Link>
            <Link href="/about" className="text-blue-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">
              HOTEL INFORMATION
            </Link>
          </div>

          {/* Hamburger Menu Button - Visible only on mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Shown when hamburger is clicked */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link 
            href="/rooms" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            ROOMS
          </Link>
          <Link 
            href="/dinning" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            DINNING
          </Link>
          <Link 
            href="/events" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            EVENTS
          </Link>
          <Link 
            href="/photos" 
            className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50"
            onClick={() => setIsOpen(false)}
          >
            PHOTOS
          </Link>
          <Link 
            href="/about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            HOTEL INFORMATION
          </Link>
        </div>
      </div>
    </nav>
        </div>
        )    
    }   
export default Header