import React from 'react';
import HeroSection from '../Section/HeroSection';

const Navbar = () => {
  return (

   <div>
     <nav className="bg-[#2c4054] text-white p-4 fixed w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between border-[1.5px] border-gray-400 text-gray-300 rounded p-4 ">

        
        <div className="text-lg font-bold">
          Md.Nafiul Islam Nishad
        </div>

        {/* Navigation Items */}
        <ul className="flex space-x-6">
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Technologies</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
      
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
    <HeroSection/>
   </div>

    
  );
};

export default Navbar;
