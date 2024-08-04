import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-pink-700 text-white p-4 sticky top-0 w-full flex justify-between items-center shadow-md z-30">
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        Jogan Meera
      </div>
      <nav className="flex space-x-4">
        <button className=" text-white px-4 py-2 rounded-full font-semibold hover:text-pink-100 transition duration-300 group relative">
          <span>Our Products</span>
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </button>
        <button className=" text-white px-4 py-2 rounded-full font-semibold hover:text-pink-100 transition duration-300 group relative">
          <span>About Us</span>
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400  transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </button>
        <button className=" text-white px-4 py-2 rounded-full font-semibold hover:text-pink-100 transition duration-300 group relative">
          <span>Contact Us</span>
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-yellow-400  transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
