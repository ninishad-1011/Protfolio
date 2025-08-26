import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#hero" },
    { name: "Services", path: "#service" },
    { name: "Technologies", path: "#tech" },
    { name: "Projects", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <div className="bg-[#0F172A] fixed w-full top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-gray-300">
        {/* Logo / Name */}
        <div className="text-lg font-bold text-white">
          Md.Nafiul Islam <br /> Nishad
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative cursor-pointer hover:text-blue-400">
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A]/90 backdrop-blur-md border-t border-gray-700 mt-[64px]">
          <ul className="flex flex-col space-y-4 p-6 text-white font-medium">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-blue-400 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
