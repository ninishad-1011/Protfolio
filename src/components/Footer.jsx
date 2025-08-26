import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaWhatsapp } from "react-icons/fa";

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
          <a href="https://github.com/ninishad-1011" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/md-nishad-islam-9460ba253/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://www.facebook.com/picci1011/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://wa.me/01748755041" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
          </a>
          <a href="mailto:nafiul1011@gmail.com">
            <FaEnvelope size={24} className="text-gray-400 hover:text-pink-500 transition-colors" />
          </a>
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
