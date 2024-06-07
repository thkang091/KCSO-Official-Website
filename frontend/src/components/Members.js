import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../index.css";

function Members() {
  return (
    <div>
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <p>Members</p>
    </header>
  );
}

export default Members;
