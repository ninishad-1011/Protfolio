import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiC, SiCplusplus } from "react-icons/si";

const technologies = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Node JS", icon: <FaNodeJs /> },
  { name: "Database", icon: <FaDatabase /> },
];

const Technologies = () => {
  return (
    <section className="bg-gradient-to-r from-[#0F172A] to-[#1E2A47] min-h-screen flex flex-col justify-center items-center px-5 py-20">
      <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
        The Skills, Tools & Technologies I Use
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 justify-items-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center cursor-pointer transform transition-all duration-300 hover:scale-110"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-white text-4xl md:text-5xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {tech.icon}
            </div>
            <span className="mt-3 text-white text-md md:text-lg font-semibold">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
