import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../Context/ThemeContext";
import { header } from "../../assets/myinfo";
import "./header.css";

const Header = () => {
  const { title } = header;
  const { theme, toggleTheme } = useTheme();

  return (
    <nav id="navbar_tab">
      <Navbar
        expand="sm"
        bg={theme === "light" ? "light" : "dark"}
        data-bs-theme={theme === "light" ? "light" : "dark"}
      >
        <Container>
          <button onClick={toggleTheme} className="theme_toggle_icon hovering">
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <Navbar.Brand
            href={header.homepage ? header.homepage : "#"}
            className="hovering"
          >
            <h3 id="navbar_title">{title}</h3>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
