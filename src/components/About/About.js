import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Rohit Chakraborty"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              <strong>Rohit Chakraborty</strong>, an Electrical Engineering undergraduate at NIT Silchar with a CGPA of 8.6, 
              who discovered his passion for software development through innovative projects and internships. 
              My journey combines technical expertise with problem-solving skills developed through 500+ coding challenges.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
              As a Software Development Intern at C-DAC CINE, I contributed to building an HRMS Portal with real-time 
              notification systems and admin dashboards. This experience enhanced my full-stack development skills 
              and understanding of enterprise software architecture.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              My projects like the Hand-drawn Circuit Recognizer (93% accuracy) and RescueConnect disaster management 
              portal demonstrate my ability to combine technical skills with real-world problem solving. I'm passionate 
              about developing solutions that bridge technology and social impact.
              
              <div className="tagline2">
                Technical Proficiencies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;