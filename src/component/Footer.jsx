import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10 pb-6 px-6 md:px-16 lg:px-32 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SoftSell</h2>
          <p className="text-gray-600">
            Simplifying software license resale. Trusted, secure, and fast.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li>
              <a href="#home" className="hover:text-black transition">
                Home
              </a>
            </li>
            <li>
              <a href="#how" className="hover:text-black transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-black transition">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-black transition">
                Reviews
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="flex items-center gap-2 text-gray-600 mb-2">
            <FaEnvelope /> support@softsell.com
          </p>
          <p className="flex items-center gap-2 text-gray-600 mb-4">
            <FaPhone /> +91 98765 XXXXX
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 pt-4 text-sm text-gray-500">
        © {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
