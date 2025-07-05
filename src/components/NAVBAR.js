import React, { useState, useEffect } from "react";
import logo from "./imgs/agapay-logo.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function handleSmoothScroll(e, targetId) {
  e.preventDefault();
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function NAVBAR() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShowNav(true);
        setLastScrollY(window.scrollY);
        return;
      }
      if (window.scrollY < lastScrollY) {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Handle menu toggle with animation delay
  const handleMenuToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setMenuOpen(!menuOpen);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Scroll to waitlist widget
  function handleWaitlistScroll(e) {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('getWaitlistContainer');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
    const el = document.getElementById('getWaitlistContainer');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (menuOpen) setMenuOpen(false);
  }

  // Helper to handle cross-page section navigation
  const handleSectionNav = (e, section) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    if (menuOpen) setMenuOpen(false);
  };

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#solutions", label: "Solutions" },
    { href: "#about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "#faq", label: "FAQs" }
  ];

  return (
    <>
      <nav className={`fixed top-3 left-1/2 transform -translate-x-1/2 w-[98vw] max-w-7xl z-50 px-2 sm:px-4 py-2 sm:py-3 flex items-center bg-white/70 backdrop-blur-md rounded-3xl shadow-lg border-2 border-teal-200 transition-all duration-500 ${showNav ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'}`}>
        {/* Logo */}
        <div className="flex items-center ml-2 md:ml-6 mr-2 md:mr-4 pr-2 sm:pr-4">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain mr-2 md:mr-3" />
        </div>
        {/* Desktop Nav Centered */}
        <div className="flex-1 flex justify-center items-center">
          <ul className="hidden md:flex space-x-6 sm:space-x-8 font-semibold text-black text-base sm:text-lg">
            <li><Link to="/" onClick={e => handleSectionNav(e, 'home')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">Home</Link></li>
            <li><Link to="/" onClick={e => handleSectionNav(e, 'about')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">About</Link></li>
            <li><Link to="/" onClick={e => handleSectionNav(e, 'solutions')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">Solutions</Link></li>
            <li><Link to="/contact" className="hover:text-teal-300 transition px-2 py-1 rounded-lg">Contact</Link></li>
            <li><Link to="/" onClick={e => handleSectionNav(e, 'faq')} className="hover:text-teal-300 transition px-2 py-1 rounded-lg">FAQs</Link></li>
          </ul>
        </div>
        {/* Join Waitlist Button Desktop */}
        <div className="hidden md:block ml-2 md:ml-4">
          <button onClick={handleWaitlistScroll} className="bg-[#0d9483] text-white font-bold px-6 py-2 rounded-full shadow hover:bg-[#0b7669] transition text-base sm:text-lg">Join Waitlist</button>
        </div>
        {/* Enhanced Hamburger for mobile */}
        <div className="md:hidden fixed top-2 right-4 z-[1200]">
          <button
            className="flex flex-col justify-center items-center w-12 h-12 focus:outline-none group"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            disabled={isAnimating}
          >
            {/* Top line */}
            <span 
              className={`block w-7 h-1 bg-[#0d9483] mb-1 transition-all duration-500 ease-in-out transform origin-center ${
                menuOpen 
                  ? 'rotate-45 translate-y-2 bg-red-500' 
                  : 'group-hover:bg-teal-600 group-hover:scale-110'
              }`}
            ></span>
            {/* Middle line */}
            <span 
              className={`block w-7 h-1 bg-[#0d9483] mb-1 transition-all duration-300 ease-in-out ${
                menuOpen 
                  ? 'opacity-0 scale-0' 
                  : 'group-hover:bg-teal-600 group-hover:scale-110'
              }`}
            ></span>
            {/* Bottom line */}
            <span 
              className={`block w-7 h-1 bg-[#0d9483] transition-all duration-500 ease-in-out transform origin-center ${
                menuOpen 
                  ? '-rotate-45 -translate-y-2 bg-red-500' 
                  : 'group-hover:bg-teal-600 group-hover:scale-110'
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Nav Sidebar */}
      <div className={`md:hidden fixed inset-0 z-[1000] transition-all duration-500 ease-in-out ${
        menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
        {/* Animated Overlay */}
          <div
          className={`absolute inset-0 bg-black transition-all duration-500 ease-in-out ${
            menuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={handleMenuToggle}
          />
        
        {/* Enhanced Sidebar */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-white flex flex-col items-start py-8 px-6 space-y-5 font-semibold text-black border-l-2 border-teal-200 z-[1100] text-lg transition-all duration-500 ease-in-out transform ${
            menuOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
          }`}
          >
          {/* Enhanced Close Button */}
            <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-2xl text-gray-400 hover:text-teal-500 focus:outline-none transition-all duration-300 hover:scale-110 hover:bg-gray-100 rounded-full"
            onClick={handleMenuToggle}
              aria-label="Close menu"
            >
            <span className="transform rotate-45 text-3xl">+</span>
            </button>

          {/* Menu Items with Staggered Animation */}
          <ul className="w-full flex flex-col items-start gap-6 mt-12">
            {menuItems.map((item, index) => (
              <li 
                key={item.href}
                className={`w-full transform transition-all duration-500 ease-out ${
                  menuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: menuOpen ? `${index * 100}ms` : '0ms' 
                }}
              >
                {item.href.startsWith('/') ? (
                  <Link 
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-teal-300 transition-all duration-300 py-3 w-full text-left border-b border-transparent hover:border-teal-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <Link 
                    to="/"
                    onClick={e => { 
                      handleSectionNav(e, item.href.substring(1)); 
                      handleMenuToggle(); 
                    }}
                    className="hover:text-teal-300 transition-all duration-300 py-3 w-full text-left border-b border-transparent hover:border-teal-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
            
            {/* Enhanced Waitlist Button */}
            <li 
              className={`w-full transform transition-all duration-500 ease-out ${
                menuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: menuOpen ? `${menuItems.length * 100}ms` : '0ms' 
              }}
            >
              <button 
                onClick={e => { 
                  handleWaitlistScroll(e); 
                  handleMenuToggle(); 
                }} 
                className="bg-gradient-to-r from-[#0d9483] to-[#0b7669] text-white font-bold px-8 py-4 rounded-full hover:from-[#0b7669] hover:to-[#0d9483] transition-all duration-300 mt-4 w-full text-lg text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                Join Waitlist
              </button>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
}