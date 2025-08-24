import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/public/Project.json') 
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#0F172A] to-[#1E2A47] py-20 px-5">
      <h1 className="text-5xl font-bold text-white text-center mb-16">
        My Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1E2A47] rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl text-white font-semibold mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-400 text-white px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
