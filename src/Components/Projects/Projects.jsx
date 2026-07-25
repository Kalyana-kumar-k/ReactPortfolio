import React from "react";
import { projects } from "../../assets/myinfo";
import { ImGithub } from "react-icons/im";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./projects.css";

const Projects = () => {
  return (
    <article id="projects">
      <h2 className="project_title">PROJECTS</h2>
      <div className="projects_container">
        {projects.map((project, index) => (
          <div key={index} className="project_box">
            <h3 className="text-center project_name">{project.name}</h3>
            <img src={project.image} alt={project.name} className="project_image" />
            <p className="project_description">{project.description}</p>
            <ul className="project_stack">
              {project.stack.map((stk, index) => (
                <li key={index}>{stk}</li>
              ))}
            </ul>
            <div className="project_links">
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener norefferer"
                className="hovering"
              >
                <ImGithub />
              </a>
              <a
                href={project.livePreview}
                target="_blank"
                rel="noopener norefferer"
                className="hovering"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Projects;
