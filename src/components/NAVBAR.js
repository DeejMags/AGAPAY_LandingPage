import React from "react";

export default function NAVBAR() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[98vw] max-w-7xl z-50 px-8 py-4 flex justify-between items-center bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border-2 border-teal-200">
      {/* Logo (test with favicon) */}
      <div className="flex items-center">
        <img src="../assets/agapay-logo.png" alt="Test" className="w-10 h-10 object-contain mr-3" />
      </div>
      <ul className="hidden md:flex space-x-10 font-semibold text-black font">
        <li><a href="#hero" className="hover:text-teal-300 transition">Home</a></li>
        <li><a href="#about" className="hover:text-teal-300 transition">About</a></li>
        <li><a href="#solutions" className="hover:text-teal-300 transition">Solutions</a></li>
        <li><a href="#contact" className="hover:text-teal-300 transition">Contact</a></li>
        <li><a href="#faq" className="hover:text-teal-300 transition">FAQs</a></li>
      </ul>
    </nav>
  );
}