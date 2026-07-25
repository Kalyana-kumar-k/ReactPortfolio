import React from "react";
import { about } from "../../assets/myinfo";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import "./about.css";

const About = () => {
  const { name, role, picture, description, resume, social } = about;

  return (
    <section id="about">
      {picture ? (
        <img src={picture} alt="user" className="about_picture" />
      ) : null}

      <h1>
        Hi, I am <span className="about_name">{name}</span>
      </h1>
      <h2 className="about_role">{role}</h2>
      <p className="about_desc">{description}</p>
      <div className="about_links">
        <a
          href={resume}
          target="_blank"
          rel="noopener norefferer"
          className="buttons"
        >
          Resume
        </a>

        <a
          href={social.github}
          target="_blank"
          rel="noopener norefferer"
          className="github_link hovering"
        >
          <ImGithub />
        </a>

        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener norefferer"
          className="linkedin_link hovering"
        >
          <BsLinkedin />
        </a>
      </div>
    </section>
  );
};

export default About;
