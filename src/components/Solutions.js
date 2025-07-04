import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Solutions() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false });
  }, []);
  return (
    <section
      id="solutions"
      className="w-full bg-[#0d9483] py-12 md:py-16 px-2 sm:px-4 md:px-8 text-white relative overflow-hidden"
    >
      {/* SVG Wave at Top */}
      <div className="absolute left-0 top-0 w-full overflow-hidden leading-none" style={{height: '16vw', minHeight: '60px', maxHeight: '90px', zIndex: 2}}>
        <svg viewBox="0 0 1440 80" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none" style={{display: 'block'}}>
          <path d="M0,70 C240,-40 1200,120 1440,10 L1440,0 L0,0 Z" fill="#fff" stroke="#fff" strokeWidth="8" />
        </svg>
      </div>
      {/* Custom CSS Wave at Top with clip-path */}
      <div
        className="absolute left-0 top-0 w-full h-16 bg-white"
        style={{
          clipPath: "polygon(0 40%, 10% 35%, 20% 30%, 30% 35%, 40% 40%, 50% 45%, 60% 40%, 70% 35%, 80% 30%, 90% 35%, 100% 40%, 100% 0, 0 0)"
        }}
      ></div>
      {/* Top Curly Divider Removed */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-lg sm:text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-white mt-20" data-aos="fade-down">We provide solutions for</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 mb-8 md:mb-12">
          {/* Households */}
          <div className="flex flex-col items-center w-full md:w-auto" data-aos="zoom-in" data-aos-delay="100">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">
              <span className="text-2xl sm:text-4xl">🏠</span>
            </div>
            <div className="font-bold text-base sm:text-lg md:text-xl mb-1 text-white">Households</div>
            <div className="text-white text-xs sm:text-base max-w-xs text-center">
              Donate and request to your fellow Kaagapays and earn real-life rewards
            </div>
          </div>
          {/* LGUs */}
          <div className="flex flex-col items-center w-full md:w-auto" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">
              <span className="text-2xl sm:text-4xl">🏛️</span>
            </div>
            <div className="font-bold text-base sm:text-lg md:text-xl mb-1 text-white">LGUs</div>
            <div className="text-white text-xs sm:text-base max-w-xs text-center">
              Access real-time waste data to improve waste management decisions
            </div>
          </div>
          {/* MSMEs & NGOs */}
          <div className="flex flex-col items-center w-full md:w-auto" data-aos="zoom-in" data-aos-delay="300">
            <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4">
              <span className="text-2xl sm:text-4xl">🏬</span>
            </div>
            <div className="font-bold text-base sm:text-lg md:text-xl mb-1 text-white">MSMEs & NGOs</div>
            <div className="text-white text-xs sm:text-base max-w-xs text-center">
              Expand your reach and receive clean materials for your eco-conscious projects
            </div>
          </div>
        </div>
      </div>
      {/* Potential Impact */}
      <div className="bg-white text-teal-400 rounded-t-3xl max-w-6xl mx-auto -mb-10 md:-mb-16 px-2 sm:px-6 py-6 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 relative z-10" data-aos="fade-up">
        <div className="flex flex-col items-center flex-1 mb-4 md:mb-0">
          <div className="font-bold text-lg md:text-5xl lg:text-4xl mb-3" style={{ color: '#0d9483' }}>Our Potential Impact</div>
          <div className="text-teal-400 text-xs md:text-base text-center mb-2 md:mb-4">By circulating, you actively help us achieve these goals</div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 flex-1 w-full">
          <div className="flex flex-col items-center min-w-[110px] md:min-w-[150px]" data-aos="fade-up" data-aos-delay="100">
            <span className="text-2xl md:text-5xl mb-2">♻️</span>
            <span className="font-bold text-base md:text-2xl text-black">50,000+</span>
            <span className="text-xs md:text-lg text-gray-500">Tons of Waste Circulated</span>
          </div>
          <div className="flex flex-col items-center min-w-[110px] md:min-w-[150px]" data-aos="fade-up" data-aos-delay="200">
            <span className="text-2xl md:text-5xl mb-2">🌱</span>
            <span className="font-bold text-base md:text-2xl text-black">20 Million</span>
            <span className="text-xs md:text-lg text-gray-500">Carbon Emissions Reduced</span>
          </div>
          <div className="flex flex-col items-center min-w-[110px] md:min-w-[150px]" data-aos="fade-up" data-aos-delay="300">
            <span className="text-2xl md:text-5xl mb-2">👥</span>
            <span className="font-bold text-base md:text-2xl text-black">100,000+</span>
            <span className="text-xs md:text-lg text-gray-500">Agapay Users</span>
          </div>
          <div className="flex flex-col items-center min-w-[110px] md:min-w-[150px]" data-aos="fade-up" data-aos-delay="400">
            <span className="text-2xl md:text-5xl mb-2">🌍</span>
            <span className="font-bold text-base md:text-2xl text-black">600</span>
            <span className="text-xs md:text-lg text-gray-500">Communities Involved</span>
          </div>
        </div>
      </div>
      {/* SVG Wave at Bottom */}
      <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none" style={{height: '16vw', minHeight: '60px', maxHeight: '90px', zIndex: 2}}>
        <svg viewBox="0 0 1440 80" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none" style={{display: 'block'}}>
          <path d="M0,10 C240,120 1200,-40 1440,70 L1440,80 L0,80 Z" fill="#fff" stroke="#fff" strokeWidth="8" />
        </svg>
      </div>
    </section>
  );
} 