import React from "react";
import { skills } from "../../assets/myinfo";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills_title">SKILLS</h2>
      <ul className="skills_list">
        {skills.map((skill, index) => (
          <li key={index} className="skill_item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
