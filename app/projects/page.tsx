import ProjectCard from '@/components/cards/ProjectCard'
import { Projects as ProjectData,UpcomingProjects as CurrentProjectsData } from "@/constants";
import React from 'react'

export default function Page() {
  return (
    <div className='relative  mb-16 mx-auto  max-w-2xl w-screen overflow-hidden'>
      <h1 className="text-3xl font-bold dark:text-white">Projects</h1>
      <p className="text-zinc-700 dark:text-zinc-400 font-semibold">
        Below are some of my recent projects. I&apos;ve worked on a wide range of
        projects, from simple landing pages to complex web applications. Each project
        has a brief description and a link to the live site.
      </p>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            
             {
             ProjectData.map((project) => (
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
           <h1 className="text-3xl font-bold dark:text-white">Upcoming Projects</h1>
           <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            
             {
             CurrentProjectsData.map((project) => (
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

    </div>
  )
}
