import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  //   color: #555;
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #000; /* Blue for consistency */
`;

const LeadershipList = styled.ul`
  max-width: 800px;
  margin: 0 auto;
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-start;

    &:before {
      content: "✔";
      color: #007aff;
      font-size: 1.5rem;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    p {
      margin: 0;
      font-size: 1.1rem;
      line-height: 1.6;
      color: #555;
    }
  }
`;

const Leadership = () => {
  return (
    <SectionWrapper id="leadership">
      <SectionHeader>Leadership</SectionHeader>
      <LeadershipList>
        <li>
          <p>
            Strengthened communication and relationships as Public Relations
            Officer for People United for Student's Help. Ensured seamless
            outreach and maintained trust with board members, scholarship
            applicants, and recipients by fostering open and transparent
            communication.
          </p>
        </li>
        <li>
          <p>
            As Sports Director of Rotaract Club (RCMG) during the COVID-19
            pandemic, proactively adapted to virtual platforms to keep the
            community engaged. Organized online yoga events, sports challenges,
            and the RCMGx Talks series featuring professionals addressing the
            pandemic’s impact.
          </p>
        </li>
        <li>
          <p>
            Actively contributed to community service through roles in the LEO
            Club and Rotaract Club. Organized fundraising events such as chess
            competitions, food distributions, and charity drives, demonstrating
            responsibility and ownership of impactful initiatives.
          </p>
        </li>
        <li>
          <p>
            Focused on the mission of providing scholarships to underprivileged
            students, actively participating in fundraising efforts and
            identifying deserving candidates to ensure a meaningful impact on
            students' lives.
          </p>
        </li>
        <li>
          <p>
            Successfully executed events and initiatives that raised funds and
            awareness for various causes, contributing to significant growth and
            engagement in all organizations served.
          </p>
        </li>
      </LeadershipList>
    </SectionWrapper>
  );
};

export default Leadership;
