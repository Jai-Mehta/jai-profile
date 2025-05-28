import React from "react";
import styled from "styled-components";
import {
  FaPython,
  FaReact,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaJs,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiFlask,
  SiDjango,
  SiTypescript,
  SiFlutter,
  SiAngular,
  SiGooglecloud,
  SiCplusplus,
  SiC,
  SiSwift,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import gcloudImage from "./static/gcloud.png"; // Import GCP image
import courseraImage from "./static/coursera.png"; // Import Coursera image

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #ffffff;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 3rem;

    .skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1rem;

      svg {
        font-size: 3rem; /* Icon size */
        margin-bottom: 0.5rem;
      }

      .python {
        color: #306998; /* Python blue */
      }

      .javascript {
        color: #f7df1e; /* JavaScript yellow */
      }

      .cplusplus {
        color: #00599c; /* C++ blue */
      }

      .c {
        color: #a8b9cc; /* C grey */
      }

      .swift {
        color: #f05138; /* Swift orange */
      }

      .java {
        color: #007396; /* Java blue */
      }

      .typescript {
        color: #3178c6; /* TypeScript blue */
      }

      .django {
        color: #092e20; /* Django green-black */
      }

      .react {
        color: #61dafb; /* React cyan */
      }

      .flask {
        color: #000000; /* Flask black */
      }

      .flutter {
        color: #02569b; /* Flutter blue */
      }
      .mongodb {
        color: #47a248; /* MongoDB green */
      }
      .angular {
        color: #dd0031; /* Angular red */
      }

      .aws {
        color: #ff9900; /* AWS orange */
      }

      .gcp {
        color: #4285f4; /* GCP blue */
      }

      .html {
        color: #e34f26; /* HTML5 orange */
      }

      .css {
        color: #1572b6; /* CSS3 blue */
      }

      .postgresql {
        color: #336791; /* PostgreSQL blue */
      }

      .mysql {
        color: #00758f; /* MySQL blue */
      }
    }
  }

  // .certifications-container {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   gap: 1.5rem;

  //   .certification {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //     gap: 0.5rem;
  //     font-size: 1rem;

  //     .certification-image {
  //       width: 60px;
  //       height: 60px;
  //       border-radius: 50%;
  //       overflow: hidden; /* Ensures the image is cropped to a circle */
  //       img {
  //         width: 100%;
  //         height: 100%;
  //         object-fit: cover; /* Ensures the image fills the circle perfectly */
  //       }
  //     }

  //     a {
  //       color: #306998; /* Link color matching Python blue */
  //       text-decoration: none;
  //       font-weight: bold;

  //       &:hover {
  //         text-decoration: underline;
  //       }
  //     }
  //   }
  // }
  .certifications-container {
    display: flex;
    flex-wrap: wrap; /* Allows items to wrap onto the next row if needed */
    justify-content: center; /* Centers items horizontally */
    gap: 2rem; /* Adds space between certifications */

    .certification {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center; /* Ensures text wraps below the image */
      width: 200px; /* Adjust the width for consistent alignment */
      gap: 0.5rem;

      .certification-image {
        width: 50px;
        height: 1AmD_5dRJY4GPc0690XkeDy75CH6VQM2BsnOSEZHHlno0px;
        border-radius: 50%;
        overflow: hidden; /* Ensures the image is cropped to a circle */
        img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensures the image fills the circle perfectly */
        }
      }

      a {
        color: #306998; /* Link color matching Python blue */
        text-decoration: none;
        font-weight: bold;
        word-wrap: break-word; /* Wraps text to fit within the container */
        word-break: break-word; /* Ensures proper text wrapping */
        line-height: 1.2; /* Adjust line height for readability */

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .subheading {
    font-size: 1.4rem;
    color: #555; /* Match Python blue */
    font-weight: bold;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const Skills = () => {
  return (
    <Section>
      <h2>Skills</h2>

      {/* Programming Languages */}
      <div className="subheading">Programming Languages</div>
      <div className="skills-container">
        <div className="skill">
          <FaPython className="python" />
          <p>Python</p>
        </div>
        <div className="skill">
          <FaJs className="javascript" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <SiCplusplus className="cplusplus" />
          <p>C++</p>
        </div>
        <div className="skill">
          <SiC className="c" />
          <p>C</p>
        </div>
        <div className="skill">
          <SiSwift className="swift" />
          <p>Swift</p>
        </div>
        <div className="skill">
          <FaJava className="java" />
          <p>Java</p>
        </div>
        <div className="skill">
          <SiTypescript className="typescript" />
          <p>TypeScript</p>
        </div>
      </div>

      {/* Frameworks */}
      <div className="subheading">Frameworks</div>
      <div className="skills-container">
        <div className="skill">
          <SiDjango className="django" />
          <p>Django</p>
        </div>
        <div className="skill">
          <FaReact className="react" />
          <p>React.js</p>
        </div>
        <div className="skill">
          <SiFlask className="flask" />
          <p>Flask</p>
        </div>
        <div className="skill">
          <SiFlutter className="flutter" />
          <p>Flutter</p>
        </div>
        <div className="skill">
          <SiAngular className="angular" />
          <p>Angular JS</p>
        </div>
      </div>

      {/* Databases */}
      <div className="subheading">Databases</div>
      <div className="skills-container">
        <div className="skill">
          <SiPostgresql className="postgresql" />
          <p>PostgreSQL</p>
        </div>
        <div className="skill">
          <SiMysql className="mysql" />
          <p>MySQL</p>
        </div>
        <div className="skill">
          <SiMongodb className="mongodb" />
          <p>MongoDB</p>
        </div>
      </div>

      {/* Certifications */}
      <div className="subheading">Certifications</div>
      <div className="certifications-container">
        <div className="certification">
          <div className="certification-image">
            <img src={gcloudImage} alt="Google Cloud Certification" />
          </div>
          <a
            href="https://cloud.google.com/certification/cloud-engineer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Associate Cloud Engineer (Google Certified)
          </a>
        </div>
        <div className="certification">
          <div className="certification-image">
            <img src={courseraImage} alt="Coursera Certification" />
          </div>
          <a
            href="https://www.coursera.org/learn/neural-networks-deep-learning"
            target="_blank"
            rel="noopener noreferrer"
          >
            Neural Networks and Deep Learning
          </a>
        </div>
        <div className="certification">
          <div className="certification-image">
            <img src={courseraImage} alt="Coursera Certification" />
          </div>
          <a
            href="https://www.coursera.org/learn/python-databases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Using Databases with Python
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
