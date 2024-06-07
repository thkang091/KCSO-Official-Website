import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import "../styles/footerIndex.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        {/* left side */}
        <div className="footer-left">
          <Contacts />
        </div>
        {/* right side */}
        <div className="footer-right">
          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            &copy; 2024 KCSO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Contacts() {
  return (
    <div className="contact-container">
      <a
        href="https://www.linkedin.com/company/umn-kcso/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "10px" }}
      >
        <FaLinkedin size={24} color="#0A66C2" />
      </a>
      <a
        href="https://discord.gg/Q9Xy8RHwDe"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "10px" }}
      >
        <FaDiscord size={24} color="#5865F2" />
      </a>
      <a
        href="https://www.instagram.com/umnkcso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} color="#E4405F" />
      </a>
    </div>
  );
}

export default Footer;
