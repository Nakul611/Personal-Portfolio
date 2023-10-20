import React from 'react'
import Title from '../layouts/Title'
import {project3, project2, project4, project1, project5, project6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="3D Portfolio"
          des="
          Learned to create 3D elements using Three.js, build reusable UI components and manage application state in React, and design responsive CSS layouts with Tailwind CSS."
          src={project2}
        />
        <ProjectsCard
          title="TO-DO LIST"
          des="Built a Kotlin-based To-Do List app with a focus on user-friendly design and efficient task management. Applied UI/UX principles for an intuitive and seamless experience."
          src={project1}
        />
        <ProjectsCard
          title="Scientific Calculator"
          des="Developed a scientific calculator application in Kotlin, integrating advanced mathematical functions and ensuring precise calculations, applied UI/UX principles."
          src={project3}
        />
        <ProjectsCard
          title="COLLEGE SPACE"
          des="Developed a college project's front-end using HTML, CSS, and JavaScript, ensuring a seamless and engaging user experience with intuitive design and interactive elements."
          src={project4}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Built an e-commerce website utilizing React and Tailwind CSS, focusing on a dynamic and responsive user interface, essential features for seamless navigation and shopping experience."
          src={project5}
        />
        <ProjectsCard
          title="Weather Report App"
          des="Developed a dynamic weather report website with real-time data integration, integrated API functionality for live weather updates, offering users an intuitive and interactive experience."
          src={project6}
        />
      </div>
    </section>
  );
}

export default Projects