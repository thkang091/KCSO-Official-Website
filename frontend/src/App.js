import React from "react";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetails";
import UpdateProjects from "./components/UpdateProjects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/backoffice" element={<UpdateProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
