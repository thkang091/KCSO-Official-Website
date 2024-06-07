import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovingText.css";
import "../styles/navbarIndex.css";
import "../styles/homeIndex.css";

function NavBar() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        {/* left side */}
        <div className="navbar-brand nav-link">
          <Link to="/">
            {/* <MovingText /> */}
            KCSO
          </Link>
        </div>
        {/* right side */}
        <div className="navbar-links">
          <div className="nav-link">
            <Link to="/about-us">ABOUT US</Link>
          </div>
          <div className="nav-link">
            <Link to="/projects">PROJECTS</Link>
          </div>
          <div className="nav-link">
            <Link to="/members">MEMBERS</Link>
          </div>
          <div className="nav-link">
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

// function MovingText() {
//   return (
//     <div className="moving-text-container">
//       <div className="moving-text">KCSO KCSO KCSO KCSO</div>
//     </div>
//   );
// }

export default NavBar;
