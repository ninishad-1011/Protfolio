import React from "react";
import { FaLaptopCode, FaPalette, FaServer, FaMobileAlt } from "react-icons/fa";

const servicesData = [
  {
    title: "Website Development",
    description:
      "I build modern, responsive, and user-friendly websites that make an impact.",
    icon: <FaLaptopCode className="text-5xl text-blue-400 mb-4" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and visually appealing interfaces that improve user experience.",
    icon: <FaPalette className="text-5xl text-pink-400 mb-4" />,
  },
  {
    title: "Web Application",
    description:
      "Full-stack web applications with seamless functionality and performance.",
    icon: <FaServer className="text-5xl text-purple-400 mb-4" />,
  },
  {
    title: "Mobile Development",
    description:
      "Responsive and user-friendly mobile apps for various platforms.",
    icon: <FaMobileAlt className="text-5xl text-cyan-400 mb-4" />,
  },
];

const Service = () => {
  return (
    <section className="bg-gradient-to-b from-[#0F172A] to-[#1E2A47] min-h-screen flex flex-col justify-center px-6 py-20">
      <h1 className="text-6xl md:text-7xl font-bold text-white text-center mb-24">
        My Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="relative group bg-[#1E2A47]/70 backdrop-blur-md border border-blue-400/30 rounded-3xl p-12 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <div className="p-6 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6 shadow-md group-hover:shadow-xl transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>

            {/* Optional decorative dots */}
            <span className="absolute -top-3 -left-3 w-6 h-6 bg-blue-400 rounded-full animate-pulse opacity-50"></span>
            <span className="absolute -bottom-3 -right-3 w-6 h-6 bg-pink-400 rounded-full animate-pulse opacity-50"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
