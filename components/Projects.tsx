import React from "react";

import { Projects as ProjectData } from "@/constants";


import More from "./ui/More";
import ProjectCard from "./cards/ProjectCard";


const Projects = () => {
  return (
    <div>
  <h1 className="text-3xl mt-5 font-bold dark:text-white">Projects</h1>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
       
        {ProjectData.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            href={project.href}
            tags={project.tags}
            icon={React.createElement(project.icon, { className: "size-10" })}
          />
        ))}
      </div>
      <More href="/projects" text="See More" />
    </div>
  );
};

export default Projects;