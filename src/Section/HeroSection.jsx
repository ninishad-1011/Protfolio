import React from "react";
import "./HeroSection.css"; 

const HeroSection = () => {
  const text1 = "WEBSITE";
  const text2 = "DEVELOPER..";

  return (
    <div className=" grid md:grid-cols-2 items-center min-h-screen bg-gradient-to-r from-[#0F172A] to-[#1E2A47] px-2 md:px-16">

      <div className="hero text-center md:text-left space-y-6 flex flex-col border-l-2 pl-6  border-blue-400 ">
        <h1 className="hero-text text-5xl md:text-6xl font-extrabold text-left m-0">
         
          {text1.split("").map((char, index) => (
            <span
              key={`w-${index}`}
              className="letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
          <br />
         
          {text2.split("").map((char, index) => (
            <span
              key={`d-${index}`}
              className="letter"
              style={{ animationDelay: `${(index + text1.length) * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
       <div>
         <h4 className="text-white text-lg md:text-xl text-left font-medium leading-relaxed flex flex-row pt-3.5 mt-3.5">
          I am Nafiul Islam - Web Developer with a <br />
          Passion for creating beautiful & responsive websites
        </h4>
        <button className=" mt-10 relative px-8 py-3 font-semibold text-white bg-blue-400 rounded-lg overflow-hidden group hover:bg-blue-600 transition-colors duration-300">
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
  <span className="relative z-10">About Me-</span>
</button>
       </div>
      
      </div>

      
      <div className="mt-8 md:mt-0 flex justify-center md:justify-center items-center"
      style={{ backgroundImage: `url('/src/assets/bg.png')` }}>
        <img  
          src="/src/assets/my.png"
          alt="picture"
           style={{ filter: "brightness(0.7)" }}
          className="w-64 md:w-80 h-64 md:h-96 rounded-xl shadow-2xl border-4 border-white/20 backdrop-blur-xs "
        />
      </div>
    </div>
  );
};

export default HeroSection;
