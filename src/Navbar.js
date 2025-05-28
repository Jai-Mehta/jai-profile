import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-links {
    display: flex;
    gap: 2rem;

    a {
      font-size: 1rem;
      font-weight: bold;
      color: #007aff;
      cursor: pointer;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #ff6d99;
      }
    }

    /* Hide nav links by default on smaller screens */
    @media (max-width: 768px) {
      display: none;
    }
  }

  /* Hamburger icon for smaller screens */
  .hamburger {
    position: absolute;
    top: 0.2rem;
    left: 0.5rem; /* Top-left corner */
    display: none;
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block; /* Show hamburger on smaller screens */
      color: #007aff;
    }
  }

  /* Dropdown menu for smaller screens */
  .dropdown-menu {
    position: absolute;
    top: 35px; /* Below the navbar */
    left: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;

    a {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: #007aff;
      cursor: pointer;
      text-decoration: none;
      transition: background 0.3s;

      &:hover {
        background: #f2f2f2;
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper>
      {/* Hamburger menu for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation links */}
      <div className="nav-links">
        <Link to="hero" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="education" smooth={true} duration={500}>
          Education
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="leadership" smooth={true} duration={500}>
          Leadership
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      )}
    </NavbarWrapper>
  );
};

export default Navbar;
