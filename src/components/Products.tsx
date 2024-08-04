import React from "react";
import p1 from "../images/products/4.png";
import p2 from "../images/products/5.png";
import p3 from "../images/products/WhatsApp Image 2024-07-27 at 15.36.31_7176b490.jpg";
import p4 from "../images/products/WhatsApp Image 2024-07-27 at 15.39.57_2177796f.jpg";
import p5 from "../images/products/WhatsApp Image 2024-07-27 at 15.41.28_0db1feb7.jpg";
import p6 from "../images/products/WhatsApp Image 2024-07-27 at 16.03.19_28b0ef0b.jpg";
import p7 from "../images/products/WhatsApp Image 2024-07-27 at 16.11.57_2dc4902c.jpg";
import p8 from "../images/products/श्री कृष्ण शरणम मम.png";
import { FaWhatsapp } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Sagwan KhandPath", image: p1 },
  { id: 2, name: "Special Sagwan KhandPath", image: p2 },
  { id: 3, name: "Shringaar", image: p3 },
  { id: 4, name: "Shringaar", image: p4 },
  { id: 5, name: "Shringaar", image: p5 },
  { id: 6, name: "Shringaar", image: p6 },
  { id: 7, name: "Shringaar", image: p7 },
  { id: 8, name: "Lalan Seva", image: p8 },
];

const Products: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/yourwhatsappnumber", "_blank");
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow cursor-auto"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{product.name}</h3>
          </div>
        ))}
      </div>
      {/* <div>
        <h2 className="text-2xl font-bold mb-4 mt-10">And many more...</h2>
      </div> */}
      <div
        className="flex items-center justify-center mt-8 p-4 bg-green-500 text-white rounded-full shadow-md hover:shadow-lg cursor-pointer hover:bg-green-600 transition duration-300"
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp className="text-3xl" /> &nbsp;
        <span className="text-lg font-semibold">Place Order on WhatsApp</span>
      </div>
    </div>
  );
};

export default Products;
