import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styles
const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  // background: #fff;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .scroll-buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 10;
    cursor: pointer;
    background: #007aff;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, background 0.3s;

    &:hover {
      // transform: scale(1.1);
      background: #0056b3;
    }
  }

  .scroll-left {
    left: 10px;
  }

  .scroll-right {
    right: 10px;
  }

  &:hover .scroll-buttons {
    display: flex;
  }

  .projects-container {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .project-card {
    flex: 0 0 300px;
    height: 300px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;
    text-align: left;
    transition: transform 0.3s, box-shadow 0.3s;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensures button stays at the bottom */

    &.visible {
      animation: ${fadeInUp} 0.5s ease-in-out forwards;
    }

    &:hover {
      // transform: translateY(-10px); /* Raise card on hover */
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #007aff;
      min-height: 90px;
    }

    p {
      font-size: 1rem;
      color: #555;
      margin-bottom: 1rem;
    }

    .github-link {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      color: #ffffff;
      background: #007aff;
      padding: 0.8rem 1.5rem;
      border-radius: 5px;
      text-decoration: none;
      margin-top: auto; /* Push button to bottom */

      &:hover {
        background: #0056b3;
      }

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 2rem;
    color: #007aff;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }

  .github-link {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #ffffff;
    background: #007aff;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    text-decoration: none;
    margin: 1rem auto;

    &:hover {
      background: #0056b3;
    }

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const CloseButton = styled(IoClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  color: #555;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #007aff;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const projects = [
  {
    name: "Disease Detection with Explainable AI",
    summary:
      "COVID-19 prediction system using chest X-rays and explainable AI.",
    details: `
            Built a COVID-19 disease prediction system, utilizing chest X-ray images as input, achieving a precision & recall score of 0.89 each.
            Implemented Explainable Artificial Intelligence using LIME to produce heatmap outputs for easier interpretation of results.
          `,
    github:
      "https://github.com/Jai-Mehta/Final_Year_Project_DiseaseDetection_XAI",
  },
  {
    name: "Talking Hand: Hand Signal to Speech Converter",
    summary: "Real-time hand signal-to-speech application for accessibility.",
    details: `
            Developed a real-time hand signal-to-speech application with an average model accuracy of 93%.
            Enabled customization of hand signals, converting custom gestures into spoken audio for improved accessibility.
          `,
    github: "https://github.com/Jai-Mehta/Hand-Signal-to-Speech-converter",
  },
  {
    name: "Cybervision Nexus",
    summary: "Network protocol analysis tool and DNS resolver.",
    details: `
            Developed a network protocol analysis tool and DNS resolver to optimize network performance and enhance cybersecurity.
            Leveraged dnspython and dpkt for DNS resolution, TCP flow analysis, and HTTP protocol analysis.
          `,
    github: "https://github.com/Jai-Mehta/Computer-Network-Cybervision-Nexus",
  },
  {
    name: "PAATHSHALA- Online Learning Platform",
    summary: "Interactive online learning platform for students and educators.",
    details: `
            Developed a full-stack web application delivering an interactive online learning experience for students and educators.
            Designed the app to manage assignments, quizzes, and lectures, and handled high traffic of over 10,000 users at a time.
          `,
    github: "https://github.com/Jai-Mehta/LMS-Pathshala",
  },
  {
    name: "TRAICORD- Leave Approval Application",
    summary: "Leave approval application with role-based access control.",
    details: `
            Designed a full-stack application for employees to submit and managers to review leave requests.
            Developed a UI with role-based access control and user authentication to enhance security.
          `,
    github: "https://github.com/Jai-Mehta/TRAICORD",
  },
  {
    name: "Politech: Decoding US Presidential Elections",
    summary: "Interactive dashboard for exploring 2016 U.S. election results.",
    details: `
            Developed a web-based dashboard for analyzing the 2016 U.S. election results using D3.js.
            Implemented dynamic, interactive plots for faster data exploration.
          `,
    github: "https://github.com/Jai-Mehta/US-PRESIDENTIAL-ELECTIONS-2016",
  },
];

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setTimeout(() => {
              setVisibleCards((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(".project-card");
        cards.forEach((card) => observer.unobserve(card));
      }
    };
  }, []);

  return (
    <Section>
      <h2>Projects</h2>
      <button className="scroll-buttons scroll-left" onClick={scrollLeft}>
        <FiChevronLeft />
      </button>
      <div className="projects-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              visibleCards.includes(index) ? "visible" : ""
            }`}
            data-index={index}
            onClick={() => setSelectedProject(project)}
          >
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub /> Visit GitHub
            </a>
          </div>
        ))}
      </div>
      <button className="scroll-buttons scroll-right" onClick={scrollRight}>
        <FiChevronRight />
      </button>

      {selectedProject && (
        <>
          <Overlay onClick={() => setSelectedProject(null)} />
          <Modal>
            <CloseButton onClick={() => setSelectedProject(null)} />
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.details}</p>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub /> Visit GitHub
            </a>
          </Modal>
        </>
      )}
    </Section>
  );
};

export default Projects;
