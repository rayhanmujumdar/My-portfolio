import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <div className="container mx-auto py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 place-content-center justify-center">
        {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
