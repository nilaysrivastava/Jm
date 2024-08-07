import React from "react";
import p3 from "../images/products/WhatsApp Image 2024-07-27 at 15.36.31_7176b490.jpg";
import p4 from "../images/products/WhatsApp Image 2024-07-27 at 15.39.57_2177796f.jpg";
import p6 from "../images/products/WhatsApp Image 2024-07-27 at 16.03.19_28b0ef0b.jpg";
import {
  FaTruck,
  FaRegCalendarCheck,
  FaHeadset,
  FaSmile,
} from "react-icons/fa";
import "./customStyles.css";
const AboutUs: React.FC = () => {
  return (
    <div>
      {/* Why Choose Us Section */}
      <div className="why-choose-section py-12 p-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
              <p className="mb-8">
                Discover why our service stands out from the rest. We are
                dedicated to providing top-notch services that are fast, easy,
                reliable, and customer-focused.
              </p>
              <div className="flex flex-wrap mb-5">
                {[
                  {
                    icon: <FaTruck className="w-8 h-8 text-[#023047] " />,
                    title: "Fast Service",
                    description:
                      "Experience lightning-fast service that ensures your needs are met with speed and efficiency.",
                  },
                  {
                    icon: (
                      <FaRegCalendarCheck className="w-8 h-8 text-[#023047]" />
                    ),
                    title: "Easy to Book",
                    description:
                      "Our hassle-free booking process allows you to easily schedule services at your convenience.",
                  },
                  {
                    icon: <FaHeadset className="w-8 h-8 text-[#023047]" />,
                    title: "24/7 Support",
                    description:
                      "We offer round-the-clock support to assist you with any queries or issues, anytime.",
                  },
                  {
                    icon: <FaSmile className="w-8 h-8 text-[#023047]" />,
                    title: "10K+ Happy Customers",
                    description:
                      "Join our community of over 10,000 satisfied customers who trust and love our services.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="w-1/2 md:w-1/2 mb-4">
                    <div className="feature flex flex-col items-center text-center">
                      <div className="icon mb-2">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="px-4" style={{ fontSize: "0.8rem" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="img-wrap pt-10 mt-10">
                <img
                  src=""
                  alt="Why Choose Us"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Help Section */}
      <div className="we-help-section py-12 bg-yellow-400 p-4">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-7/12 mb-5 lg:mb-0">
              <div className="imgs-grid">
                {[p3, p4, p6].map((image, index) => (
                  <div key={index} className={`grid-item grid-${index + 1}`}>
                    <img
                      src={image}
                      alt={`Grid ${index + 1}`}
                      className=" object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12 lg:pl-12">
              <h2 className="text-3xl font-bold mb-4">
                We Help You Maintain a Healthy and Hygienic Environment
              </h2>
              <p className="mb-4">
                At Smart Cleaning Services, we specialize in creating and
                maintaining pristine environments with our dedicated team and
                advanced technologies.
              </p>
              <ul className="list-disc pl-5 mb-4">
                {[
                  "Our highly trained cleaning professionals deliver excellent service with great attention to detail.",
                  "We use modern tools and advanced technologies to ensure efficient and effective cleaning.",
                  "We create customized cleaning plans that fit your specific needs, ensuring your space is clean and comfortable.",
                  "We are available 24/7 to support you and offer flexible scheduling options to meet your needs.",
                ].map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
