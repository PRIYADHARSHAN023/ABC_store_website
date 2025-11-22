import React, { useState } from 'react'

function Header({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            ABC General Store
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-200 transition">Home</a>
            <a href="#products" className="hover:text-blue-200 transition">Products</a>
            <a href="#services" className="hover:text-blue-200 transition">Services</a>
            <a href="#about" className="hover:text-blue-200 transition">About</a>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          </nav>

          <button
            onClick={onCartClick}
            className="hidden md:flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition relative"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-2">
            <a href="#home" className="hover:text-blue-200 transition py-2">Home</a>
            <a href="#products" className="hover:text-blue-200 transition py-2">Products</a>
            <a href="#services" className="hover:text-blue-200 transition py-2">Services</a>
            <a href="#about" className="hover:text-blue-200 transition py-2">About</a>
            <a href="#contact" className="hover:text-blue-200 transition py-2">Contact</a>
            <button
              onClick={onCartClick}
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition relative w-fit"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Cart
              {cartCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
