import React, { useState, useEffect, useRef } from "react";
import c2 from "../images/6.png";
import c3 from "../images/10.png";
import c4 from "../images/11.png";

const images = [c2, c3, c4];
// const imagesWithClone = [...images, images[0]];

const Landing: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans flex flex-col items-center justify-center">
      {/* Header Banner */}
      <div className="h-[80vh] flex items-center justify-between px-4 text-sm relative overflow-hidden w-full">
        <button
          onClick={prevImage}
          className="absolute left-0 px-4 h-full flex items-center justify-center text-pink-700 bg-yellow-400 hover:text-pink-500 transition duration-300 z-10 text-3xl "
        >
          &#8249;
        </button>
        <div className="relative mx-auto h-full w-full">
          <img
            src={images[currentImageIndex]}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <button
          onClick={nextImage}
          className="absolute right-0 px-4 h-full flex items-center justify-center text-pink-700 bg-yellow-400 hover:text-pink-500 transition duration-300 z-10 text-3xl"
        >
          &#8250;
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="text-lg font-semibold text-pink-700 mb-2">
          Swipe down
        </div>
        <div className="flex flex-col items-center">
          <svg
            className="animate-bounce w-6 h-6 text-pink-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Landing;
