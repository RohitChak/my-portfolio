import React from "react";
import styled from "@emotion/styled";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterSection = styled.div`
  background-image: url(/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px; /* Increased height */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2rem; /* Reduced padding */
  margin-top: -50px; /* Pull up the wave */

  .social-links {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
    
    a {
      color: #fff;
      font-size: 2rem;
      transition: color 0.3s ease;
      
      &:hover {
        color: #0077b5;
      }
    }
  }

  .copyright {
    color: #bebebe;
    text-align: center;
    font-size: 0.9rem;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <div className="social-links">
          <a href="https://github.com/RohitChak" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/rohit-chak" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Rohit Chakraborty. All rights reserved.
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;
