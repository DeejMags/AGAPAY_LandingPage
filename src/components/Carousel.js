import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const items = [
  {
    image: "https://wastelessfuture.com/wp-content/uploads/2017/05/cola-bottles.jpg",
    title: "Empty Coke Bottles",
    category: "Plastic, Metal",
    price: "₱40",
    free: true,
  },
  {
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80",
    title: "Gradeschool Books",
    category: "Paper",
    price: "₱160",
    free: true,
  },
  {
    image: "https://media.karousell.com/media/photos/products/2023/7/29/green_pearl_wave_monoblock_cha_1690640517_20aa5937",
    title: "Monoblock Chairs",
    category: "Plastic",
    price: "₱270",
    free: true,
  },
  {
    image: "https://i.ebayimg.com/images/g/jJkAAOSwk-Rj9V-j/s-l1200.png",
    title: "Old Newspapers",
    category: "Paper",
    price: "₱50",
    free: false,
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplljOaO8Z8RiYc93E-MXb1l5RZdGHMrRJoA&s",
    title: "Plastic Crates",
    category: "Plastic",
    price: "₱120",
    free: false,
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabj9h5skDLoTQvEiDkN8ev-FmoT3UZa1nzQ&s",
    title: "Glass Jars",
    category: "Glass",
    price: "₱80",
    free: false,
  },
];

export default function Carousel() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);
  const [flippedIdx, setFlippedIdx] = useState(null);
  const [startIdx, setStartIdx] = useState(0);
  const isMobile = window.innerWidth < 768;
  const cardsToShow = isMobile ? 1 : 3;
  const pageSize = isMobile ? 1 : 3;
  const endIdx = startIdx + cardsToShow;
  const visibleItems = items.slice(startIdx, endIdx);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - pageSize, 0));
  };
  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + pageSize, items.length - cardsToShow));
  };

  return (
    <section id="carousel" className="bg-white py-16 px-4 flex flex-col items-center" data-aos="fade-up">
      <div className="w-full max-w-4xl mx-auto text-center" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-500 mb-2">
          FREE Recyclable Materials from your fellow Kaagapays
        </h2>
        <p className="text-gray-800 text-lg mb-8">
          Agapay is home to many free and clean recyclable resources from the residents of your community. <span className="font-bold text-black">Feeling FOMO yet?</span>
        </p>
      </div>
      {/* Carousel */}
      <div className="relative w-full max-w-5xl flex items-center justify-center overflow-x-auto md:overflow-visible">
        {/* Left Arrow */}
        <button
          className="block absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 border border-gray-200 hover:bg-gray-100"
          data-aos="fade-right"
          onClick={handlePrev}
          disabled={startIdx === 0}
          style={{ display: startIdx === 0 && isMobile ? 'none' : 'block' }}
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        {/* Cards */}
        <div className="flex gap-4 md:gap-6 justify-center w-full min-w-[260px] md:min-w-0">
          {visibleItems.map((item, idx) => {
            const realIdx = startIdx + idx;
            return (
              <div
                key={realIdx}
                className="relative w-64 sm:w-72 h-80 sm:h-96 perspective flex-shrink-0"
                style={{ perspective: "1000px" }}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div
                  className={`transition-transform duration-500 w-full h-full ${flippedIdx === realIdx ? "rotate-y-180" : ""}`}
                  style={{
                    transformStyle: "preserve-3d",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute w-full h-full bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border border-gray-100"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-xl mb-4" />
                    <div className="w-full text-left">
                      <div className="font-semibold text-gray-800 text-base sm:text-lg md:text-lg mb-1">{item.title}</div>
                      <div className="text-xs sm:text-sm md:text-base text-gray-500 mb-2">{item.category}</div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 line-through text-xs sm:text-sm md:text-base">{item.price}</span>
                        <span className="text-teal-500 font-bold text-base sm:text-lg md:text-lg">{item.free ? "FREE!" : item.price}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      {realIdx < 3 ? (
                        <button
                          className="bg-[#0d9483] hover:bg-[#0b7669] text-white font-semibold py-2 px-6 rounded-full transition shadow text-sm sm:text-base md:text-lg"
                          onClick={() => setFlippedIdx(realIdx)}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <>
                          <button
                            className="bg-[#0d9483] hover:bg-[#0b7669] text-white font-semibold py-2 px-4 rounded-full transition shadow text-sm sm:text-base md:text-lg"
                            onClick={() => setFlippedIdx(realIdx)}
                          >
                            Donate
                          </button>
                          <button
                            className="bg-[#0d9483] hover:bg-[#0b7669] text-white font-semibold py-2 px-4 rounded-full transition shadow text-sm sm:text-base md:text-lg"
                            onClick={() => setFlippedIdx(realIdx)}
                          >
                            Rent
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Back Side */}
                  <div
                    className="absolute w-full h-full bg-[#0d9483] hover:bg-[#0b7669] rounded-2xl flex flex-col items-center justify-center text-white text-2xl font-bold cursor-pointer"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                    onClick={() => setFlippedIdx(null)}
                  >
                    <span className="text-4xl mb-2">🚧</span>
                    <span className="mb-2">Coming Soon!</span>
                    <span className="text-sm mt-2">(Click to flip back)</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Right Arrow */}
        <button
          className="block absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 border border-gray-200 hover:bg-gray-100"
          data-aos="fade-left"
          onClick={handleNext}
          disabled={startIdx >= items.length - cardsToShow}
          style={{ display: startIdx >= items.length - cardsToShow && isMobile ? 'none' : 'block' }}
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
      {/* Dots */}
      <div className="flex gap-2 justify-center mt-6" data-aos="fade-up" data-aos-delay="300">
        {Array.from({length: items.length - cardsToShow + 1}).map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full inline-block ${startIdx === i ? "bg-[#0d9483]" : "bg-gray-300"}`}
            onClick={() => setStartIdx(i * pageSize)}
            style={{ cursor: "pointer" }}
          ></span>
        ))}
      </div>
    </section>
  );
}
