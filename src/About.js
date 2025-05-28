import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f5f5f7;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
  }
`;

const About = () => {
  return (
    <Section>
      <h2>About Me</h2>
      <p>
        I am a Software Development Engineer passionate about building scalable,
        high-performing systems. With experience in AI, cloud computing, and
        full-stack development, I love solving complex challenges and delivering
        impactful solutions. My goal is to contribute to innovative projects
        that shape the future of technology.
      </p>
    </Section>
  );
};

export default About;
