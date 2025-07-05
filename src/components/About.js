import React from "react";

export default function About() {
  return (
    <section id="about" className="py-6 sm:py-8 md:py-12 px-1 sm:px-4 bg-gray-50 text-center flex flex-col items-center">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-teal-500 mb-4 flex items-center justify-center gap-2 mt-6 md:mt-12" data-aos="fade-down" data-aos-delay="100">
        <span>About Agapay</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-4 md:gap-10 w-full max-w-4xl mx-auto">
        {/* Feature List */}
        <ul className="text-left text-base sm:text-lg md:text-2xl text-gray-800 font-semibold space-y-2 sm:space-y-4 flex-1">
          <li className="flex flex-col items-start gap-0" data-aos="fade-right" data-aos-delay="200">
            <span className="flex items-center gap-2"><span role="img" aria-label="Gift">✔️</span>Donate & request</span>
            <span className="text-gray-500 text-xs sm:text-sm font-normal ml-7">Give away or request recyclable items from your community.</span>
          </li>
          <li className="flex flex-col items-start gap-0" data-aos="fade-right" data-aos-delay="300">
            <span className="flex items-center gap-2"><span role="img" aria-label="Location">✔️</span>Locate waste facilities</span>
            <span className="text-gray-500 text-xs sm:text-sm font-normal ml-7">Find the nearest recycling and drop-off centers easily.</span>
          </li>
          <li className="flex flex-col items-start gap-0" data-aos="fade-right" data-aos-delay="400">
            <span className="flex items-center gap-2"><span role="img" aria-label="Chart">✔️</span>Track your waste impact</span>
            <span className="text-gray-500 text-xs sm:text-sm font-normal ml-7">Monitor your contributions and see your positive effect.</span>
          </li>
          <li className="flex flex-col items-start gap-0" data-aos="fade-right" data-aos-delay="500">
            <span className="flex items-center gap-2"><span role="img" aria-label="Money">✔️</span>Earn cash from trash</span>
            <span className="text-gray-500 text-xs sm:text-sm font-normal ml-7">Get rewards or cash for participating in recycling.</span>
          </li>
        </ul>
        {/* Demo Video */}
        <div className="flex-1 flex justify-center md:justify-end items-center w-full">
          <video
            src={require('./imgs/demo app.mp4')}
            alt="Agapay Demo App"
            className="w-full max-w-[110px] sm:max-w-[150px] md:max-w-[180px] lg:max-w-[200px] h-auto drop-shadow-xl bg-transparent rounded-2xl"
            data-aos="zoom-in" data-aos-delay="200"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      {/* Key Features */}
      <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-teal-400 mt-8 md:mt-16 mb-4 md:mb-8" data-aos="fade-down" data-aos-delay="400">Discover our key features</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
        <div className="bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-center border-2 border-teal-200 min-w-[140px] min-h-[120px] transition-all duration-300 hover:shadow-2xl hover:translate-y-2" data-aos="zoom-in" data-aos-delay="600">
          <span className="text-lg sm:text-4xl mb-2">🎁</span>
          <span className="font-semibold text-teal-500 text-base sm:text-xl">Donate</span>
        </div>
        <div className="bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-center border-2 border-teal-200 min-w-[140px] min-h-[120px] transition-all duration-300 hover:shadow-2xl hover:translate-y-2" data-aos="zoom-in" data-aos-delay="700">
          <span className="text-lg sm:text-4xl mb-2">🙋‍♂️</span>
          <span className="font-semibold text-teal-500 text-base sm:text-xl">Request</span>
        </div>
        <div className="bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-center border-2 border-teal-200 min-w-[140px] min-h-[120px] transition-all duration-300 hover:shadow-2xl hover:translate-y-2" data-aos="zoom-in" data-aos-delay="800">
          <span className="text-lg sm:text-4xl mb-2">💸</span>
          <span className="font-semibold text-teal-500 text-base sm:text-xl">Earn</span>
        </div>
        <div className="bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-center border-2 border-teal-200 min-w-[140px] min-h-[120px] transition-all duration-300 hover:shadow-2xl hover:translate-y-2" data-aos="zoom-in" data-aos-delay="900">
          <span className="text-lg sm:text-4xl mb-2">📊</span>
          <span className="font-semibold text-teal-500 text-base sm:text-xl">Track</span>
        </div>
        <div className="bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-center border-2 border-teal-200 min-w-[140px] min-h-[120px] transition-all duration-300 hover:shadow-2xl hover:translate-y-2" data-aos="zoom-in" data-aos-delay="1000">
          <span className="text-lg sm:text-4xl mb-2">📍</span>
          <span className="font-semibold text-teal-500 text-base sm:text-xl">Locate</span>
        </div>
        <div className="bg-white rounded-xl shadow p-4 sm:p-8 flex flex-col items-center border-2 border-teal-200 min-w-[140px] min-h-[120px] transition-all duration-300 hover:shadow-2xl hover:translate-y-2" data-aos="zoom-in" data-aos-delay="1100">
          <span className="text-lg sm:text-4xl mb-2">♻️</span>
          <span className="font-semibold text-teal-500 text-base sm:text-xl">Circulate</span>
        </div>
      </div>
    </section>
  );
}