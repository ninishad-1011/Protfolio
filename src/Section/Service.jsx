import React from "react";
import { FaLaptopCode, FaPalette, FaServer, FaMobileAlt } from "react-icons/fa";

const servicesData = [
  {
    title: "Website Development",
    description:
      "I am a passionate Website Developer skilled in building modern, responsive, and user-friendly websites.",
    icon: <FaLaptopCode className="text-4xl text-blue-400 mb-4" />,
  },
  {
    title: "UI/UX Design",
    description:
      "I create intuitive and visually appealing interfaces that enhance user experience.",
    icon: <FaPalette className="text-4xl text-blue-400 mb-4" />,
  },
  {
    title: "Web Application",
    description:
      "I develop full-stack web applications with seamless functionality and performance.",
    icon: <FaServer className="text-4xl text-blue-400 mb-4" />,
  },
  {
    title: "Mobile Development",
    description:
      "I create responsive and user-friendly mobile applications for various platforms.",
    icon: <FaMobileAlt className="text-4xl text-blue-400 mb-4" />,
  },
];

const Service = () => {
  return (
    <div className="bg-[#0F172A] py-20 px-5">
      <h1 className="text-5xl font-bold text-white text-center mb-16">
        My Services
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-[#1E2A47] border-2 border-blue-400 rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300 text-center"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold text-white mb-4">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
