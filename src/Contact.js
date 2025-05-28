// import React from "react";
// import styled from "styled-components";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

// const Section = styled.section`
//   padding: 4rem 2rem;
//   text-align: center;

//   h2 {
//     font-size: 2.5rem;
//     margin-bottom: 2rem;
//   }

//   .contact-container {
//     display: flex;
//     justify-content: center;
//     gap: 2rem;

//     .contact-item {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       font-size: 1rem;
//       color: #555;

//       svg {
//         font-size: 3rem;
//         margin-bottom: 0.5rem;
//         color: #007aff;
//         transition: transform 0.3s, color 0.3s;
//       }

//       svg:hover {
//         transform: scale(1.2);
//         color: #0056b3;
//       }
//     }
//   }
// `;

// const Contact = () => {
//   return (
//     <Section>
//       <h2>Contact Me</h2>
//       <div className="contact-container">
//         <div className="contact-item">
//           <p>
//             <a
//               href="https://www.linkedin.com/in/jai-anish-mehta/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaLinkedin />
//               LinkedIn
//             </a>
//           </p>
//         </div>
//         <div className="contact-item">
//           <p>
//             <a
//               href="https://github.com/Jai-Mehta"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FaGithub />
//               GitHub
//             </a>
//           </p>
//         </div>
//         <div className="contact-item">
//           <p>
//             <FaEnvelope />
//             <a href="mailto:jaimehta@cs.stonybrook.edu">Email</a>
//           </p>
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Contact;
import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .contact-container {
    display: flex;
    justify-content: center;
    gap: 2rem;

    .contact-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1rem;
      color: #555;

      svg {
        font-size: 3rem;
        color: #007aff;
        transition: transform 0.3s, color 0.3s;
        margin-bottom: 0.5rem; /* Space between the icon and text */
      }

      svg:hover {
        transform: scale(1.2);
        color: #0056b3;
      }

      span {
        margin-top: 0.5rem; /* Adds spacing between the icon and the label */
        font-size: 1rem;
        color: #555;
        text-decoration: none;

        &:hover {
          color: #007aff; /* Change text color on hover */
        }
      }

      a {
        text-decoration: none;
        color: inherit; /* Inherit color from the parent container */
        display: flex;
        flex-direction: column; /* Stack icon and text */
        align-items: center; /* Center-align the text */
      }
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-item">
          <a
            href="https://www.linkedin.com/in/jai-anish-mehta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="contact-item">
          <a
            href="https://github.com/Jai-Mehta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:jaimehta@cs.stonybrook.edu">
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
