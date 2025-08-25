import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const text1 = "WEBSITE";
  const text2 = "DEVELOPER..";

  return (
    <div className="grid md:grid-cols-2 items-center min-h-screen bg-gradient-to-r from-[#0F172A] to-[#1E2A47] px-4 md:px-16">
      {/* Left Side - Text */}
      <div className="hero text-center md:text-left space-y-6 flex flex-col border-l-2 pl-6 border-blue-400">
        <h1 className="hero-text text-5xl md:text-6xl font-extrabold leading-tight text-left">
          {text1.split("").map((char, index) => (
            <span
              key={`w-${index}`}
              className="letter inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
          <br />
          {text2.split("").map((char, index) => (
            <span
              key={`d-${index}`}
              className="letter inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + text1.length) * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <h4 className="text-white text-lg md:text-xl text-left font-medium leading-relaxed pt-4">
          I am <span className="font-bold text-blue-300">Nafiul Islam</span> –
          Web Developer with a <br />
          passion for creating{" "}
          <span className="text-cyan-300">beautiful & responsive websites</span>
          .
        </h4>

        {/* Button */}
        <a
          href="/public/Nafiul_CV _internShip.pdf" // make sure resume.pdf is in public/ folder
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 relative px-8 py-3 font-semibold text-white bg-blue-500 rounded-lg overflow-hidden group hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 inline-block"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></span>
          <span className="relative z-10">Download CV →</span>
        </a>
      </div>

      <div
        className="mt-10 md:mt-0 flex justify-center items-center relative"
        style={{
          backgroundImage: `url('/src/assets/bg.png')`,
          backgroundSize: "cover",
        }}
      >
        <img
          src="/src/assets/my.png"
          alt="profile"
          className="w-64 md:w-80 h-64 md:h-96 rounded-xl shadow-2xl border-4 border-white/20 animate-float"
          style={{ filter: "brightness(0.9)" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
