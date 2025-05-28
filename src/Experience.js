import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import deutsche_logo from "./static/deutsche_logo.png"; // Deutsche Bank logo
import kjsce_logo from "./static/kjsce_logo.png"; // KJSCE logo

const Section = styled.section`
  padding: 4rem 2rem;
  // background: #ffffff;

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 800px;
    margin: 0 auto;

    .item {
      display: flex;
      align-items: center; /* Center logo with content */
      gap: 1rem;
      margin-bottom: 2rem;
      opacity: 0; /* Hidden initially for animation */

      .logo {
        flex-shrink: 0;
        width: 70px;
        height: 70px;
        align-self: center; /* Center logo vertically */
      }

      .content {
        .role {
          font-size: 1.2rem;
          font-weight: bold;
          color: #007aff;
        }

        .details {
          margin-top: 0.5rem;
          font-size: 1rem;
          color: #555;

          ul {
            list-style-type: disc;
            margin-left: 1.5rem;

            li {
              margin-bottom: 0.5rem; /* Space between each bullet */
            }
          }
        }

        .technologies {
          margin-top: 0.5rem;
          font-size: 0.9rem;
          color: #777;
          font-style: italic;
        }
      }
    }

    @media (max-width: 768px) {
      .item {
        flex-direction: column;
        align-items: center;

        .logo {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const slideInVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: index * 0.2 }, // Stagger animation
    }),
  };

  const experiences = [
    {
      logo: deutsche_logo,
      role: "Software Engineer | Deutsche Bank",
      details: [
        "Developed a scalable web application for analyzing legacy codebases, reducing analysis costs by 70%.",
        "Integrated Google Vertex AI to generate file summaries, saving 20+ hours weekly.",
        "Improved productivity by 80% with role-based access and dynamic UI features.",
      ],
      technologies: "React, Flask, SQL, GCP, Docker",
    },
    {
      logo: deutsche_logo,
      role: "Software Analyst Intern | Deutsche Bank",
      details: [
        "Developed an NLP application to analyze the bank’s performance in the Environment, Governance and Sustainability sector, by scraping data from newsroom pages of the bank and other competitors, proposing ways to improve the score by more than 30%.",
        "Designed and deployed a RESTful API using Python Flask on Google App Engine, achieving 99.9% uptime and enabling seamless data integration for real-time analytics.",
        "Leveraged Google NLP-API to analyze and visualize global sentiment trends, providing suggestions for improving the ESG score.",
      ],
      technologies: "Python, Flask, GCP, Data Science",
    },
    {
      logo: kjsce_logo,
      role: "Software Engineering Intern | K.J. Somaiya College of Engineering",
      details: [
        "Engineered a water-logging prediction system by using Raspberry Pi 4 for real-time data acquisition, and Flutter framework for mobile application development. Utilized AWS for data transfer between sensors, AWS DynamoDB and the mobile application.",
        "Built a scalable data pipeline with AWS Lambda and DynamoDB for real-time ingestion of sensor data, reducing latency by 30ms.",
        "Tackled environmental challenges with innovative cloud solutions.",
      ],
      technologies:
        "Python, AWS (DynamoDB, Lambda functions, API Gateway), REST APIs, Github.",
    },
    {
      logo: kjsce_logo,
      role: "Software Engineering Intern | K.J. Somaiya College of Engineering",
      details: [
        "Collaborated on a plant disease detection system using CNNs and SVM.",
        "Achieved 91% accuracy in disease classification.",
        "Enhanced machine learning expertise in image processing and analysis.",
      ],
      technologies: "Python, TensorFlow, OpenCV, Google Colab",
    },
  ];

  return (
    <Section ref={ref}>
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.div
            className="item"
            key={index}
            initial="hidden"
            animate={controls}
            custom={index}
            variants={slideInVariant}
          >
            <img src={experience.logo} alt="Company Logo" className="logo" />
            <div className="content">
              <p className="role">{experience.role}</p>
              <div className="details">
                <ul>
                  {experience.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <p className="technologies">
                Technologies: {experience.technologies}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
