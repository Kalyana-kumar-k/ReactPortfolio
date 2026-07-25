import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegCopyright } from "react-icons/fa";
import { RiRadioButtonLine } from "react-icons/ri";
import { about } from "../../assets/myinfo";
import { useTheme } from "../Context/ThemeContext";
import "./footer.css";
const Footer = () => {
  const { theme } = useTheme();
  return (
    <Card
      className="text-center footer"
      bg={theme === "light" ? "light" : "dark"}
    >
      <Card.Body>
        <Card.Link
          href={about.social.github}
          className="footer_link hovering"
          target="_blank"
          rel="noopener norefferer"
        >
          GitHub
        </Card.Link>
        <Card.Link
          href={about.social.linkedin}
          className="footer_link hovering"
          target="_blank"
          rel="noopener norefferer"
        >
          Linkedin
        </Card.Link>
        <Card.Link
          href={about.resume}
          className="footer_link hovering"
          target="_blank"
          rel="noopener norefferer"
        >
          Resume
        </Card.Link>
        <Card.Text>
          <FaRegCopyright />
          <span> 2026 | {about.name} | All Rights Reserved.</span> <br />
          <RiRadioButtonLine className="active_dot" />
          <span>
            {" "}
            Open to new oppurtunities | Have an idea? Let's build Something
            together.
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Footer;
