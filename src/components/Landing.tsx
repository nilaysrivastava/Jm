import React, { useState } from "react";
import c2 from "../images/6.png";
import c3 from "../images/10.png";
import c4 from "../images/11.png";
import "./customStyles2.css";

const images = [c2, c3, c4];
const texts = [
  "First Image Description  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt placeat quibusdam explicabo accusantium est? Quia minus voluptas, quam aliquam quibusdam deserunt sunt unde beatae sapiente sed quod aperiam aspernatur!",
  "First Image Description  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt placeat quibusdam explicabo accusantium est? Quia minus voluptas, quam aliquam quibusdam deserunt sunt unde beatae sapiente sed quod aperiam aspernatur!",
  "First Image Description  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt placeat quibusdam explicabo accusantium est? Quia minus voluptas, quam aliquam quibusdam deserunt sunt unde beatae sapiente sed quod aperiam aspernatur!",
]; // Texts for each image

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

  return (
    <div className="font-sans flex flex-col items-center justify-center">
      {/* Header Banner */}
      <div className="h-[80vh] flex items-center justify-between px-4 text-sm relative overflow-hidden w-full">
        <button
          onClick={prevImage}
          className="absolute left-0 px-4 h-full flex items-center justify-center text-pink-700 bg-yellow-400 hover:text-pink-500 transition duration-300 z-10 text-3xl"
        >
          &#8249;
        </button>
        <div className="relative mx-auto h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-black opacity-80"></div>
          <img
            src={images[currentImageIndex]}
            className="w-full h-full object-cover"
            alt="Slideshow image"
          />
          <div
            key={currentImageIndex} // Change the key to trigger re-mount
            className="absolute bottom-10 left-10 text-white text-xl font-bold animate-slide-up w-1/3"
          >
            {texts[currentImageIndex]}
          </div>
        </div>
        <button
          onClick={nextImage}
          className="absolute right-0 px-4 h-full flex items-center justify-center text-pink-700 bg-yellow-400 hover:text-pink-500 transition duration-300 z-10 text-3xl"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Landing;
