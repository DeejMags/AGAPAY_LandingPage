import React, { useState } from "react";
import logo from "./imgs/agapay-logo.png";

function handleSmoothScroll(e, targetId) {
  e.preventDefault();
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function NAVBAR() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Scroll to waitlist widget
  function handleWaitlistScroll(e) {
    e.preventDefault();
    const el = document.getElementById('getWaitlistContainer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
  return (
    <>
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[98vw] max-w-7xl z-50 px-2 sm:px-4 py-2 sm:py-3 flex items-center bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border-2 border-teal-200">
        {/* Logo */}
        <div className="flex items-center ml-2 md:ml-6 mr-2 md:mr-4 pr-2 sm:pr-4">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain mr-2 md:mr-3" />
        </div>
        {/* Desktop Nav Centered */}
        <div className="flex-1 flex justify-center items-center">
          <ul className="hidden md:flex space-x-6 sm:space-x-8 font-semibold text-black text-base sm:text-lg">
            <li><a href="#home" onClick={e => handleSmoothScroll(e, 'home')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">Home</a></li>
            <li><a href="#about" onClick={e => handleSmoothScroll(e, 'about')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">About</a></li>
            <li><a href="#solutions" onClick={e => handleSmoothScroll(e, 'solutions')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">Solutions</a></li>
            <li><a href="#contact" onClick={e => handleSmoothScroll(e, 'contact')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">Contact</a></li>
            <li><a href="#faq" onClick={e => handleSmoothScroll(e, 'faq')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">FAQs</a></li>
          </ul>
        </div>
        {/* Join Waitlist Button Desktop */}
        <div className="hidden md:block ml-2 md:ml-4">
          <button onClick={handleWaitlistScroll} className="bg-[#0d9483] text-white font-bold px-6 py-2 rounded-full shadow hover:bg-[#0b7669] transition text-base sm:text-lg">Join Waitlist</button>
        </div>
        {/* Hamburger for mobile - move outside navbar for mobile */}
        <div className="md:hidden fixed top-2 right-4 z-[1200]">
          <button
            className="flex flex-col justify-center items-center w-12 h-12 focus:outline-none"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-1 bg-[#0d9483] mb-1 transition-all duration-300 ease-in-out transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 bg-[#0d9483] mb-1 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 bg-[#0d9483] transition-all duration-300 ease-in-out transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>
      {/* Mobile Nav Sidebar Overlay - render outside nav */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-[1000] transition-opacity duration-300"
            onClick={() => setMenuOpen(false)}
          />
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white flex flex-col items-start py-8 px-6 space-y-5 font-semibold text-black border-l-2 border-gray-200 z-[1100] text-lg transition-transform duration-300"
            style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          >
            {/* Close X button */}
            <button
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-teal-500 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="w-full flex flex-col items-start gap-6 mt-8">
              <li><a href="#home" onClick={e => { handleSmoothScroll(e, 'home'); setMenuOpen(false); }} className="hover:text-teal-300 transition py-2 w-full text-left">Home</a></li>
              <li><a href="#solutions" onClick={e => { handleSmoothScroll(e, 'solutions'); setMenuOpen(false); }} className="hover:text-teal-300 transition py-2 w-full text-left">Solutions</a></li>
              <li><a href="#about" onClick={e => { handleSmoothScroll(e, 'about'); setMenuOpen(false); }} className="hover:text-teal-300 transition py-2 w-full text-left">About</a></li>
              <li><a href="#contact" onClick={e => { handleSmoothScroll(e, 'contact'); setMenuOpen(false); }} className="hover:text-teal-300 transition py-2 w-full text-left">Contact</a></li>
              <li><a href="#faq" onClick={e => { handleSmoothScroll(e, 'faq'); setMenuOpen(false); }} className="hover:text-teal-300 transition py-2 w-full text-left">FAQs</a></li>
              <li className="w-full">
                <button onClick={e => { handleWaitlistScroll(e); setMenuOpen(false); }} className="bg-[#0d9483] text-white font-bold px-8 py-3 rounded-full hover:bg-[#0b7669] transition mt-2 w-full text-lg text-left">Join Waitlist</button>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}