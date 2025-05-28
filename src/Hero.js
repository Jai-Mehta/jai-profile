import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProfileImage from "./static/Profile.jpg"; // Import your profile image

const HeroWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #ffffff; /* White background */
  padding: 2rem;
  color: #333;
`;

const TypingMessage = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  color: #007aff;
  margin-bottom: 2.7rem;
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

const ProfilePicture = styled(motion.div)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden; /* Ensures the image is cropped to the circular shape */
  margin-bottom: 1rem;
  border: 2px solid #cccccc; /* Subtle gray border */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image fills the circle perfectly */
  }
`;

const HeroContent = styled.div`
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
    color: #222; /* Slightly darker gray */
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    color: #555;
  }

  .button-container {
    display: flex;
    gap: 20px; /* Adds 20px space between the buttons */
    justify-content: center;
    margin-top: 1rem;

    button {
      padding: 0.8rem 2rem;
      font-size: 1rem;
      background: #007aff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #0056b3;
      }

      a {
        color: white; /* Ensure the text inside the button is white */
        text-decoration: none;
      }
    }
  }
`;

const Hero = () => {
  const messages = [
    "Hey! Great to see you here!",
    // "I got you!"
  ];
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const scrollToWhyHireMe = () => {
    const section = document.getElementById("why-hire-me");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  useEffect(() => {
    const typeSpeed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < messages[messageIndex].length) {
        setCurrentMessage((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setCurrentMessage((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!deleting && charIndex === messages[messageIndex].length) {
        setTimeout(() => setDeleting(true), 1000); // Pause before deleting
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messages.length); // Move to next message
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, messageIndex, messages]);

  return (
    <HeroWrapper>
      <TypingMessage>{currentMessage}</TypingMessage>
      <ProfilePicture
        initial={{ scale: 0 }} // Circle starts at 0 size
        animate={{ scale: 1 }} // Circle scales up
        transition={{ duration: 1, ease: "easeOut" }} // Smooth scaling
      >
        <img src={ProfileImage} alt="Profile" />
      </ProfilePicture>
      <HeroContent>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Jai Mehta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Passionate Software Engineer | AI Enthusiast | Cloud Developer
        </motion.p>
        <div className="button-container">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://docs.google.com/document/d/1AmD_5dRJY4GPc0690XkeDy75CH6VQM2BsnOSEZHHlno/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToWhyHireMe}
          >
            Why Hire Me?
          </motion.button>
        </div>
      </HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
