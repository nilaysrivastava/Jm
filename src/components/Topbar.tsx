import React, { useState, useEffect } from "react";

const messages = [
  "Use Code 'ADD15' to get additional 15% off on all Poshaks",
  "Free shipping on orders over $50",
  "New arrivals are here! Check them out now",
];

const Topbar: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const nextMessage = () => {
    setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const prevMessage = () => {
    setCurrentMessageIndex(
      (prevIndex) => (prevIndex - 1 + messages.length) % messages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextMessage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-400 text-pink-700 flex items-center justify-between px-4 py-2 text-sm relative overflow-hidden h-10">
      <button
        onClick={prevMessage}
        className="absolute left-0 px-4 h-full flex items-center justify-center text-pink-700 bg-yellow-400 hover:text-pink-500 transition duration-300 text-3xl"
      >
        &#8249;
      </button>
      <div className="mx-auto whitespace-nowrap transition duration-500 ease-in-out">
        {messages[currentMessageIndex]}
      </div>
      <button
        onClick={nextMessage}
        className="absolute right-0 px-4 h-full flex items-center justify-center text-pink-700 bg-yellow-400 hover:text-pink-500 transition duration-300 text-3xl"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Topbar;
