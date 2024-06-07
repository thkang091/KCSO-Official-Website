import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Footer from "./Footer.js";
import "../styles/homeIndex.css";
import "../styles/scrollIndex.css";
import "../styles/navbarIndex.css";
import "../styles/hoverTextIndex.css";
import "../index.css";

function HomePage() {
  return (
    <div>
      <div>
        <nav className="navbar">
          <div className="navbar-brand nav-link">
            <Link to="/">KCSO</Link>
          </div>
          <div className="navbar-links">
            <TypeWords />
          </div>
        </nav>

        {/* Main Content divided into two parts */}
        <div className="main-container">
          {/* left Side */}
          <div className="left-content">
            <Header />
          </div>

          {/* Right Side */}
          <div className="right-content">
            <KcsoIntro />
          </div>
        </div>
        <h3 className="scroll-font scroll-line">| Scroll For More |</h3>
        <ScrollForMore />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return <header className="header">{"{ KCSO /}"}</header>;
}

function KcsoIntro() {
  return (
    <div>
      <div className="subheader">
        <h2 style={{ color: " #5661ff" }}>Korean</h2>
        <h2>Computer</h2>
        <h2>Science</h2>
        <h2>Organization</h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "25px" }}>
          Based in
          <span style={{ color: "#5661ff" }}> University of Minnesota</span>
        </span>
      </div>
    </div>
  );
}

function ScrollForMore() {
  const [visible, setVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
  return (
    <div className="scroll-container">
      <div ref={textRef} className={`scroll ${visible ? "appear" : ""}`}>
        <Link
          to="/about-us"
          className={`scroll ${visible ? "appear hoverText" : "hoverText"}`}
        >
          About Us
        </Link>
        <Link
          to="/projects"
          className={`scroll ${visible ? "appear hoverText" : "hoverText"}`}
        >
          Projects
        </Link>
        <Link
          to="/members"
          className={`scroll ${visible ? "appear hoverText" : "hoverText"}`}
        >
          Members
        </Link>
        <Link
          to="/contact"
          className={`scroll ${visible ? "appear hoverText" : "hoverText"}`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

function TypeWords() {
  return (
    <div className="typewriter-wrapper">
      <span>
        <Typewriter
          options={{
            strings: [
              '<span">"CONNECT"</span>',
              '<span">"INNOVATE"</span>',
              '<span">"{CODE}"</span>',
              '<span">"DEVELOP"</span>',
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
}

export default HomePage;
