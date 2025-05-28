import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import WhyHireMe from "./WhyHireme"; // Import the new WhyHireMe component
import GlobalStyle from "./GlobalStyle";
import Education from "./Education";
import Leadership from "./Leadership";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {/* Add the sticky navbar */}
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>

      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="whyHireMe">
        <WhyHireMe />
      </div>
      <div id="leadership">
        <Leadership />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
