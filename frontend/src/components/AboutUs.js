import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/aboutusIndex.css";
import "../styles/hoverTextIndex.css";
import "../index.css";

function AboutUs() {
  const [isVisible0, setIsVisible0] = useState(true);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible0(false);
    setIsVisible1(true);
    setIsVisible2(false);
    setIsVisible3(false);
  };

  const toggleVisibility2 = () => {
    setIsVisible0(false);
    setIsVisible1(false);
    setIsVisible2(true);
    setIsVisible3(false);
  };

  const toggleVisibility3 = () => {
    setIsVisible0(false);
    setIsVisible1(false);
    setIsVisible2(false);
    setIsVisible3(true);
  };

  return (
    <div>
      <NavBar />
      <div className="about-main-container">
        <div className="about-left-content">
          {isVisible0 && <AboutHeader />}
          {isVisible1 && <About />}
          {isVisible2 && <Mission />}
          {isVisible3 && <Goal />}
        </div>
        <div className="about-right-content">
          <h1 onClick={toggleVisibility1} className="hoverText">
            About Us
          </h1>
          <h1 onClick={toggleVisibility2} className="hoverText">
            Our Mission
          </h1>
          <h1 onClick={toggleVisibility3} className="hoverText">
            Our Goal
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function AboutHeader() {
  return (
    <div className="about-header">
      <h1>
        WE ARE <br></br>KCSO
      </h1>
    </div>
  );
}

function About() {
  return (
    <div className="about-content" style={{ marginTop: "70px" }}>
      <p>
        Welcome to the Korean Computer Science Organization.
        <br></br>
        <br></br>
        We are dedicated to promoting computer science education and fostering a
        community for computer science enthusiasts in Korea.
        <br></br>
      </p>
    </div>
  );
}

function Mission() {
  return (
    <div className="about-content">
      <p>
        To empower students at our college with knowledge, skills, and
        opportunities in computer science, fostering a community of innovation,
        collaboration, and growth. <br></br>
        <br></br>Our mission is to bridge the gap between academic learning and
        practical application, encouraging students to explore the vast
        possibilities within the field of computer science and to contribute
        positively to the tech community in University of Minnesota and beyond.
      </p>
    </div>
  );
}

function Goal() {
  return (
    <div className="about-content">
      <span
        style={{
          color: "#5661ff",
          borderBottom: "2px solid rgba(178, 178, 178, 0.307)",
        }}
      >
        Skill Development
      </span>
      <br></br>
      <br></br>
      Provide members with opportunities to learn beyond the classroom through
      workshops and guest lectures from industry experts.
      <br></br>
      <br></br>
      <span
        style={{
          color: "#5661ff",
          borderBottom: "2px solid rgba(178, 178, 178, 0.307)",
        }}
      >
        Networking Development
      </span>
      <br></br>
      <br></br>
      Facilitate networking events that connect students with professionals,
      alumni, and faculty members in the field of computer science.
      <br></br>
      <br></br>
      <span
        style={{
          color: "#5661ff",
          borderBottom: "2px solid rgba(178, 178, 178, 0.307)",
        }}
      >
        Career Development
      </span>
      <br></br>
      <br></br>
      Organize company visits to expose students to career opportunities in
      computer science.
    </div>
  );
}
export default AboutUs;
