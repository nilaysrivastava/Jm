import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-700 text-white p-4 md:p-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 justify-between">
        {/* Support section */}
        <div className="pl-16 ml-16">
          <h5 className="font-bold mb-2">Direct Links</h5>
          <ul>
            <li>Home</li>
            <li>Our Products</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Connect section */}
        <div className="col-span-2 md:col-span-1 pl-16 ml-16">
          <h5 className="font-bold mb-2">CONNECT WITH US</h5>
          <p className="flex flex-row py-1">
            <FaPhoneAlt /> &nbsp; +918279233727
          </p>
          <p className="flex flex-row py-1">
            <FaEnvelope /> &nbsp; dakshhgupta55@gmail.com
          </p>
        </div>
        {/* Social Media Handles section */}
        <div className="pl-16 ml-16">
          <h5 className="font-bold mb-2">FOLLOW US</h5>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <div className="text-center text-md mt-8">© 2024, Jogan Meera</div>
    </footer>
  );
};

export default Footer;
