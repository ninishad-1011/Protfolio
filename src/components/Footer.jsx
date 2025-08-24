import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Name and Role */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Nafiul Islam</h2>
          <p className="text-gray-400">
            Web Developer | Passion for building responsive & modern websites
          </p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <FaGithub size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
          <FaLinkedin size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
          <FaTwitter size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
          <FaEnvelope size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Nafiul Islam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
