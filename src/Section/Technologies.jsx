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
  { name: "HTML", icon: <FaHtml5 className="text-6xl text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-6xl text-blue-600" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-6xl text-yellow-400" /> },
  { name: "React JS", icon: <FaReact className="text-6xl text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl text-teal-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-6xl text-blue-700" /> },
  { name: "PHP", icon: <FaPhp className="text-6xl text-indigo-600" /> },
  { name: "C", icon: <SiC className="text-6xl text-gray-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-6xl text-blue-500" /> },
];

const Technologies = () => {
  return (
    <div className="bg-[#0F172A] py-20 px-5">
      <h1 className="text-5xl font-bold text-white text-center mb-16">
        Technologies I Use
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#1E2A47] p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {tech.icon}
            <h3 className="text-white text-xl font-semibold mt-4">{tech.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
