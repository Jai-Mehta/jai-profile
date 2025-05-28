// import React, { useRef, useEffect } from "react";
// import styled from "styled-components";

// const Section = styled.section`
//   position: relative;
//   margin: 0;
//   width: 100%;
//   height: 90vh; /* Updated height to 90% of the viewport */
//   overflow: hidden;
//   background: #000; /* Black background */
//   padding: 4rem 2rem;

//   h2 {
//     position: absolute;
//     left: 50%;
//     transform: translateX(-50%);
//     z-index: 2;
//     font-size: 2.5rem;
//     color: white;
//     text-align: center;
//   }

//   canvas {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 1; /* Ensure canvas stays behind the header */
//   }
// `;

// const WhyHireMe = () => {
//   const canvasRef = useRef(null);
//   const skills = [
//     "Problem Solver",
//     "Leader",
//     "Team Player",
//     "Adaptable",
//     "Innovative",
//     "Proactive",
//     "Critical Thinker",
//     "Collaborator",
//     "Effective Communicator",
//     "Detail-Oriented",
//   ];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const width = window.innerWidth;
//     const height = window.innerHeight * 0.9; // Adjusted canvas height to match section height (90% of viewport)
//     canvas.width = width;
//     canvas.height = height;

//     const bubbles = [];

//     // Generate random bubbles
//     for (let i = 0; i < 10; i++) {
//       const radius = Math.random() * 30 + 40;
//       bubbles.push({
//         x: Math.random() * (width - radius * 2) + radius,
//         y: Math.random() * (height - radius * 2) + radius,
//         dx: Math.random() * 2 - 1,
//         dy: Math.random() * 2 - 1,
//         radius: radius,
//         skill: skills[i % skills.length],
//         revealed: false,
//       });
//     }

//     const drawBubble = (bubble) => {
//       ctx.beginPath();
//       ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2, false);

//       const gradient = ctx.createRadialGradient(
//         bubble.x,
//         bubble.y,
//         bubble.radius * 0.6,
//         bubble.x,
//         bubble.y,
//         bubble.radius
//       );
//       // gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)"); // Bright white center
//       // gradient.addColorStop(0.4, "rgba(25,80, 180, 0.3)"); // Blue-pinkish hue
//       // gradient.addColorStop(1, "rgba(128, 43, 190, 0.1)"); // Blue-purple hue with reduced opacity
//       gradient.addColorStop(0, "rgba(255, 255, 255, 0)"); // Bright white center
//       gradient.addColorStop(0.4, "rgba(25,80, 180, 0.3)"); // Pinkish hue with reduced opacity
//       gradient.addColorStop(1, "rgba(128, 43, 190, 0.1)"); // Blue-purple hue with lighter opacity
//       gradient.addColorStop(1, "rgba(0, 0, 0, 1)"); // Transparent edge

//       ctx.fillStyle = gradient;
//       ctx.fill();

//       ctx.lineWidth = 0.2;
//       ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
//       ctx.stroke();

//       // Draw text inside the bubble
//       ctx.font = `${bubble.radius * 0.25}px Arial`;
//       ctx.fillStyle = "#FFFFFF"; // Bright white text
//       ctx.textAlign = "center";
//       ctx.textBaseline = "middle";
//       ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
//       ctx.shadowBlur = 8;
//       ctx.shadowOffsetX = 0;
//       ctx.shadowOffsetY = 0;

//       const words = bubble.skill.split(" ");
//       const lines = [];
//       let currentLine = words[0];
//       for (let i = 1; i < words.length; i++) {
//         const testLine = currentLine + " " + words[i];
//         const textWidth = ctx.measureText(testLine).width;
//         if (textWidth > bubble.radius * 1.5) {
//           lines.push(currentLine);
//           currentLine = words[i];
//         } else {
//           currentLine = testLine;
//         }
//       }
//       lines.push(currentLine);

//       const lineHeight = bubble.radius * 0.25;
//       const startY = bubble.y - (lines.length - 1) * (lineHeight / 2);
//       lines.forEach((line, index) => {
//         ctx.fillText(line, bubble.x, startY + index * lineHeight);
//       });

//       ctx.shadowColor = "transparent"; // Reset shadow for other elements
//     };

//     const handleCollisions = () => {
//       for (let i = 0; i < bubbles.length; i++) {
//         for (let j = i + 1; j < bubbles.length; j++) {
//           const dx = bubbles[i].x - bubbles[j].x;
//           const dy = bubbles[i].y - bubbles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           // Check if the bubbles overlap
//           if (distance < bubbles[i].radius + bubbles[j].radius) {
//             const overlap = bubbles[i].radius + bubbles[j].radius - distance;
//             const angle = Math.atan2(dy, dx);
//             const offsetX = (overlap / 2) * Math.cos(angle);
//             const offsetY = (overlap / 2) * Math.sin(angle);

//             bubbles[i].x += offsetX;
//             bubbles[i].y += offsetY;
//             bubbles[j].x -= offsetX;
//             bubbles[j].y -= offsetY;

//             bubbles[i].revealed = true;
//             bubbles[j].revealed = true;
//           }
//         }
//       }
//     };

//     const update = () => {
//       ctx.clearRect(0, 0, width, height);

//       bubbles.forEach((bubble) => {
//         bubble.x += bubble.dx;
//         bubble.y += bubble.dy;

//         if (bubble.x + bubble.radius > width) {
//           bubble.x = width - bubble.radius;
//           bubble.dx = -bubble.dx;
//         }
//         if (bubble.x - bubble.radius < 0) {
//           bubble.x = bubble.radius;
//           bubble.dx = -bubble.dx;
//         }
//         if (bubble.y + bubble.radius > height) {
//           bubble.y = height - bubble.radius;
//           bubble.dy = -bubble.dy;
//         }
//         if (bubble.y - bubble.radius < 0) {
//           bubble.y = bubble.radius;
//           bubble.dy = -bubble.dy;
//         }

//         drawBubble(bubble);
//       });

//       handleCollisions();
//       requestAnimationFrame(update);
//     };

//     update();

//     return () => cancelAnimationFrame(update);
//   }, [skills]);

//   return (
//     <Section>
//       <h2>Why Hire Me?</h2>
//       <canvas ref={canvasRef}></canvas>
//     </Section>
//   );
// };

// export default WhyHireMe;

// h2 {
//   font-size: 2.5rem;
//   margin-bottom: 2rem;
// }

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";

// const SectionWrapper = styled.section`
//   padding: 4rem 2rem;
//   background: #000; /* Black background */
//   color: #fff; /* White text color */
// `;

// const SectionHeader = styled.h2`
//   font-size: 2.5rem;
//   color: #fff; /* White color for header */
//   margin-bottom: 2rem;
//   text-align: center; /* Centered header */
// `;

// const MessagesContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   max-width: 800px;
//   margin: 0 auto;
//   gap: 1.5rem;
//   justify-items: start; /* Align messages to the left */

//   /* Limit the grid to a maximum of 2 columns */
//   @media (min-width: 600px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
// `;

// const MessageWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Bullet = styled.div`
//   width: 8px;
//   height: 8px;
//   background-color: #fff; /* White color for bullet */
//   margin-right: 10px;
//   flex-shrink: 0; /* Ensures bullet remains square */
// `;

// const TypingMessage = styled.div`
//   font-size: 1.3rem;
//   font-weight: bold; /* Keeps the text bold */
//   color: #fff; /* White text color */
//   position: relative;

//   &::after {
//     content: "|";
//     display: inline-block;
//     margin-left: 5px;
//     animation: blink 0.8s steps(2, start) infinite;
//   }

//   @keyframes blink {
//     to {
//       visibility: hidden;
//     }
//   }
// `;

// const StaticMessage = styled.div`
//   font-size: 1.3rem;
//   font-weight: bold; /* Keeps the text bold */
//   color: #fff; /* White text color */
// `;

// const WhyHireMe = () => {
//   const messages = [
//     "Adaptable and Quick Learner",
//     "Empathetic Communicator",
//     "Detail-Oriented and Organized",
//     "Team Player with Leadership Skills",
//     "Proactive Problem Solver",
//     "Innovative Thinker",
//     "Strong Work Ethic",
//     "Excellent Time Management",
//   ];
//   const [displayedMessages, setDisplayedMessages] = useState([]);
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [charIndex, setCharIndex] = useState(0);
//   const [messageIndex, setMessageIndex] = useState(0);

//   useEffect(() => {
//     if (messageIndex >= messages.length) return; // Stop when all messages are displayed

//     const typeSpeed = 100;
//     const timeout = setTimeout(() => {
//       if (charIndex < messages[messageIndex].length) {
//         setCurrentMessage((prev) => prev + messages[messageIndex][charIndex]);
//         setCharIndex(charIndex + 1);
//       } else {
//         // Add completed message to displayedMessages and move to the next
//         setDisplayedMessages((prev) => [...prev, messages[messageIndex]]);
//         setCurrentMessage("");
//         setCharIndex(0);
//         setMessageIndex(messageIndex + 1);
//       }
//     }, typeSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, messageIndex, messages]);

//   return (
//     <SectionWrapper id="why-hire-me">
//       <SectionHeader>Why Hire Me?</SectionHeader>
//       <MessagesContainer>
//         {displayedMessages.map((message, index) => (
//           <MessageWrapper key={index}>
//             <Bullet /> <StaticMessage>{message}</StaticMessage>
//           </MessageWrapper>
//         ))}
//         {messageIndex < messages.length && (
//           <MessageWrapper>
//             <Bullet />
//             <TypingMessage>{currentMessage}</TypingMessage>
//           </MessageWrapper>
//         )}
//       </MessagesContainer>
//     </SectionWrapper>
//   );
// };

// export default WhyHireMe;
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 4rem 2rem;
  background: #000; /* Black background */
  color: #fff; /* White text color */
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
  color: #fff; /* White color for header */
  margin-bottom: 2rem;
  text-align: center; /* Centered header */
`;

const MessagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 800px;
  margin: 0 auto;
  gap: 1.5rem;
  justify-items: start; /* Align messages to the left */

  /* Limit the grid to a maximum of 2 columns */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Bullet = styled.div`
  width: 8px;
  height: 8px;
  background-color: #fff; /* White color for bullet */
  margin-right: 10px;
  flex-shrink: 0; /* Ensures bullet remains square */
`;

const TypingMessage = styled.div`
  font-size: 1.3rem;
  font-weight: bold; /* Keeps the text bold */
  color: #fff; /* White text color */
  position: relative;

  &::after {
    content: "|";
    display: inline-block;
    margin-left: 5px;
    animation: blink 0.8s steps(2, start) infinite;
  }

  @keyframes blink {
    to {
      visibility: hidden;
    }
  }
`;

const StaticMessage = styled.div`
  font-size: 1.3rem;
  font-weight: bold; /* Keeps the text bold */
  color: #fff; /* White text color */
`;

const WhyHireMe = () => {
  const messages = [
    "Adaptable and Quick Learner",
    "Empathetic Communicator",
    "Detail-Oriented and Organized",
    "Team Player with Leadership Skills",
    "Proactive Problem Solver",
    "Innovative Thinker",
    "Strong Work Ethic",
    "Excellent Time Management",
  ];
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Track visibility of the section

  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger when section becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || messageIndex >= messages.length) return; // Only start if the section is visible

    const typeSpeed = 30;
    const timeout = setTimeout(() => {
      if (charIndex < messages[messageIndex].length) {
        setCurrentMessage((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        // Add completed message to displayedMessages and move to the next
        setDisplayedMessages((prev) => [...prev, messages[messageIndex]]);
        setCurrentMessage("");
        setCharIndex(0);
        setMessageIndex(messageIndex + 1);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, messageIndex, messages, isVisible]);

  return (
    <SectionWrapper id="why-hire-me" ref={sectionRef}>
      <SectionHeader>Why Hire Me?</SectionHeader>
      <MessagesContainer>
        {displayedMessages.map((message, index) => (
          <MessageWrapper key={index}>
            <Bullet /> <StaticMessage>{message}</StaticMessage>
          </MessageWrapper>
        ))}
        {messageIndex < messages.length && (
          <MessageWrapper>
            <Bullet />
            <TypingMessage>{currentMessage}</TypingMessage>
          </MessageWrapper>
        )}
      </MessagesContainer>
    </SectionWrapper>
  );
};

export default WhyHireMe;
