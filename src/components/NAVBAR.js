import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[98vw] max-w-7xl z-50 px-8 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border border-teal-200">
      {/* Logo (text for now) */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center mr-3 font-bold text-white text-2xl">A</div>
        <span className="text-2xl font-bold text-teal-400 tracking-wide">Agapay</span>
      </div>
      <ul className="hidden md:flex space-x-10 font-medium text-black">
        <li><a href="#hero" className="hover:text-teal-300 transition">Home</a></li>
        <li><a href="#partner" className="hover:text-teal-300 transition">Solutions</a></li>
        <li><a href="#about" className="hover:text-teal-300 transition">About</a></li>
        <li><a href="#waitlist" className="hover:text-teal-300 transition">Contact</a></li>
        <li><a href="#waitlist" className="hover:text-teal-300 transition">Solutions</a></li>
      </ul>
    </nav>
  );
}
