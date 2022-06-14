import React from "react";
import useProject from "../../Hooks/useProject";
import Project from "./Project";

const Projects = () => {
  const [projects] = useProject();
  return (
    <div className="bg-[#112B3C]">
      <div className="container mx-auto py-10">
        <div className="mb-5">
          <h1 className="text-4xl text-center mb-2 text-white font-semibold">
            <span className="text-[#A16207]">Latest</span> Project
          </h1>
          <div className="h-1 w-60 bg-[#112B3C] mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 place-content-center justify-items-center">
          {projects.map((project) => (
            <Project key={project.id} project={project}></Project>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
