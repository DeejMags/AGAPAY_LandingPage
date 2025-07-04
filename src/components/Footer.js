import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import agapayLogo from "./imgs/agapay-logo.svg";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);
  return (
    <footer className="w-full bg-[#0d9483] text-white pt-0 pb-6 px-2 sm:px-4 mt-24 relative overflow-hidden min-h-[220px]">
      {/* SVG Wave at Top Inside Footer */}
      <div className="absolute left-0 top-0 w-full overflow-hidden leading-none" style={{height: '16vw', minHeight: '60px', maxHeight: '90px', zIndex: 2}}>
        <svg viewBox="0 0 1440 80" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none" style={{display: 'block'}}>
          <path d="M0,70 C240,-40 1200,120 1440,10 L1440,0 L0,0 Z" fill="#fff" stroke="#fff" strokeWidth="8" />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-10 pt-20 px-2 sm:px-0">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-start mb-6 sm:mb-0 w-full sm:w-auto">
          <div className="flex items-center mb-2">
            <img src={agapayLogo} alt="Agapay Logo" className="w-8 h-8 object-contain" />
            <span className="ml-2 text-base sm:text-lg font-bold text-white">Agapay</span>
          </div>
          <span className="text-xs sm:text-sm text-white">2023 Agapay</span>
        </div>
        {/* Contact, Social, Legal Row */}
        <div className="flex flex-row w-full sm:w-auto justify-between gap-4 sm:gap-10">
          {/* Contact */}
          <div className="w-1/3 sm:w-auto mb-0">
            <div className="font-bold mb-2 text-base sm:text-lg text-white">Contact</div>
            <div className="text-xs sm:text-sm text-white">17 Basement I Legarda Rd.<br />UC-BCF Legarda Campus<br />Baguio City Philippines<br />0800 01234 5678</div>
          </div>
          {/* Social Media */}
          <div className="w-1/3 sm:w-auto mb-0">
            <div className="font-bold mb-2 text-base sm:text-lg text-white">Social media</div>
            <ul className="text-xs sm:text-sm space-y-1">
              <li>
                <a href="https://www.facebook.com/app.agapay" className="hover:underline text-white flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div className="w-1/3 sm:w-auto">
            <div className="font-bold mb-2 text-base sm:text-lg text-white">Legal</div>
            <ul className="text-xs sm:text-sm space-y-1">
              <li><a href="/" className="hover:underline text-white">Privacy Policy</a></li>
              <li><a href="/" className="hover:underline text-white">Cookie Agreement</a></li>
              <li><a href="/" className="hover:underline text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
