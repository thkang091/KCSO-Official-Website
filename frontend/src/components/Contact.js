import React, { useState } from "react";
import { FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import NavBar from "./NavBar";
import "../index.css";
import "../styles/contactIndex.css";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <NavBar />
      <h1 className="header-container">CONTACT</h1>
      <AskAnything />
      <Contacts />
      <Footer />
    </div>
  );
}

function AskAnything() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:austinkang7777@gmail.com?subject=Question from the Website&body=${encodeURIComponent(
      message
    )}`;
  };
  return (
    <div className="ask-container">
      <form onSubmit={handleSubmit}>
        <input
          id="message"
          type="text"
          class="ask-input-field"
          placeholder="Ask Anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}

function Contacts() {
  return (
    <div
      className="contact-container"
      style={{ marginTop: "50px", marginBottom: "100px" }}
    >
      <a
        style={{ marginRight: "150px" }}
        href="https://www.linkedin.com/company/umn-kcso/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={100} color="#0A66C2" />
      </a>
      <a
        style={{ marginRight: "150px" }}
        href="https://discord.gg/Q9Xy8RHwDe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord size={100} color="#5865F2" />
      </a>
      <a
        href="https://www.instagram.com/umnkcso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={100} color="#E4405F" />
      </a>
    </div>
  );
}

export default Contact;
