import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "./Carousel";
import About from "./About";
import Solutions from "./Solutions";
import FAQs from "./FAQs.js";
import Footer from "./Footer.js";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    // Add Waitlist CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css";
    document.head.appendChild(link);

    // Add Waitlist JS
    const script = document.createElement("script");
    script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-2 sm:px-4 md:px-6 overflow-hidden pt-24 sm:pt-28"
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1700151675904-f86058e24665?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="absolute inset-0 w-full h-full min-h-screen object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center min-h-screen w-full">
          <div className="flex-1 flex flex-col items-start justify-center text-left md:pl-12 gap-2 md:gap-4">
            <div className="text-teal-500 text-xl md:text-3xl font-bold drop-shadow-lg mb-1 mt-0" data-aos="fade-down" data-aos-delay="100">
              Abot Kamay ang Pagbibigay
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl lg:text-[10rem] font-extrabold text-white drop-shadow-lg leading-tight" data-aos="fade-up" data-aos-delay="200">
              Agapay
            </h1>
            <p className="mt-2 md:mt-4 max-w-xs sm:max-w-md md:max-w-xl text-white text-base md:text-xl font-medium drop-shadow" data-aos="fade-up" data-aos-delay="300">
              An all-in-one platform that promotes a circular economy through community building and easy exchange of recyclable resources.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center w-full mt-8 md:mt-0">
            <div id="getWaitlistContainer" data-waitlist_id="30000" data-widget_type="WIDGET_1" />
          </div>
        </div>
      </section>
      <Carousel />
      <About />
      <Solutions />
      <FAQs />
      <Footer />
    </>
  );
}