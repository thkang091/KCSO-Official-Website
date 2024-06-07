import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/projectIndex.css";
import "../styles/boxIndex.css";
import "../index.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get("/projects");
      setProjects(data);
      setFilteredProjects(data);
    };
    fetchProjects();
  }, []);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) =>
          project.name.toLowerCase().includes(query.toLowerCase()) ||
          project.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div>
      <NavBar />
      <h1 className="projects-header">PROJECTS</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="boxes-container">
        {filteredProjects.map((project) => (
          <div className="box">
            <div key={project._id} className="box-title">
              {project.name}
            </div>
            <br></br>
            {project.summary}
            <br></br>
            <Link to={`/projects/${project._id}`} className="box-link">
              MORE
            </Link>
          </div>
        ))}
      </div>
      {/* <Update /> */}
      <Footer />
    </div>
  );
}

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          class="input-field"
          value={query}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

// function Update() {
//   return (
//     <div>
//       <Link to="/updateProjects">UPDATE</Link>
//     </div>
//   );
// }

export default Projects;
