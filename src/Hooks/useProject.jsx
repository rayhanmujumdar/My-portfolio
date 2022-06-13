import { useEffect, useState } from "react";

const useProject = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/rayhanmujumdar/My-portfolio/main/public/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects,setProjects];
};

export default useProject;
