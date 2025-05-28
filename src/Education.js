import React from "react";
import styled from "styled-components";
import sbuImage from "./static/sbu.png"; // Stony Brook University image
import kjsceImage from "./static/mumbai.png"; // University of Mumbai image

const SectionWrapper = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  color: #333;
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #black; /* Blue for consistency */
`;

const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  flex: 1;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #007aff;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #555;
  }

  ul {
    text-align: left;
    list-style: disc;
    margin-top: 1rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #555;
    }
  }
`;

const Education = () => {
  return (
    <SectionWrapper id="education">
      <SectionHeader>Education</SectionHeader>
      <EducationContainer>
        <Card>
          <img src={sbuImage} alt="Stony Brook University" />
          <h3>Master of Science in Computer Science</h3>
          <p>Stony Brook University</p>
          <p>
            <strong>GPA:</strong> 3.94/4
          </p>
          <p>Aug 2022 - May 2024</p>
          <ul>
            <li>
              Courses: Theory of Database Systems, Big Data Algorithms, Data
              Visualization, Computer Networks, Probability and Statistics
            </li>
            <li>
              Graduate Assistantships: Department of Technology & Society, CSE
              332 - Introduction to Visualization, IAE 101 - Digital
              Intelligence
            </li>
          </ul>
        </Card>
        <Card>
          <img src={kjsceImage} alt="University of Mumbai" />
          <h3>Bachelor of Technology in Information Technology</h3>
          <p>University of Mumbai</p>
          <p>
            <strong>GPA:</strong> 9.10/10
          </p>
          <p>Aug 2018 - Jun 2022</p>
          <ul>
            <li>
              Courses: Object-Oriented Design, Operating Systems, Data
              Structures and Algorithms, Artificial Intelligence, Machine
              Learning
            </li>
          </ul>
        </Card>
      </EducationContainer>
    </SectionWrapper>
  );
};

export default Education;
