import React, { useEffect, useState } from "react";
import Slide1 from "../assets/Slide1.jpg";
import Slide2 from "../assets/Slide2.jpg";
import Slide3 from "../assets/Slide3.jpg";

const Slide = () => {
  const slides = [Slide1, Slide2, Slide3];
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  return (
    <div
      className="relative w-full max-w-[1500px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SLIDE */}
      <div className="relative w-full h-[100px] md:h-[600px] overflow-hidden rounded-2xl shadow-xl mt-10">
        <img
          src={slides[current]}
          alt={`slide ${current + 1}`}
          className="w-full h-full object-cover transition-all duration-700"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* BOTÃO ESQUERDO */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-30 flex -translate-y-1/2 items-center justify-center cursor-pointer group"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C65D4E] backdrop-blur-sm transition group-hover:bg-white/60">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 19-7-7 7-7"
            />
          </svg>
        </span>
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-30 flex -translate-y-1/2 items-center justify-center cursor-pointer group"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#C65D4E] backdrop-blur-sm transition group-hover:bg-white/60">
          <svg
            className="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m9 5 7 7-7 7"
            />
          </svg>
        </span>
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-[#C65D4E] scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;