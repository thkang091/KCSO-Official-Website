import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Auth from "./Auth";
import "../styles/updateIndex.css";
import "../index.css";

function UpdateProjects() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Auth onSuccess={handleSuccess} />;
  }

  return (
    <div>
      <NavBar />
      <ProjectForm />
      <Footer />
    </div>
  );
}

function ProjectForm() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: "",
    summary: "",
    description: "",
  });

  const fetchProjects = async () => {
    const { data } = await axios.get("/projects");
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async () => {
    await axios.post("/projects", newProject);
    fetchProjects();
    setNewProject({ name: "", summary: "", description: "" });
  };

  const deleteProject = async (id) => {
    await axios.delete(`/projects/${id}`);
    fetchProjects();
  };

  return (
    <div className="update-container">
      {/* left-side */}
      <div className="left-update-container">
        <h1>Projects</h1>
        <input
          style={{ width: "75%", marginBottom: "25px" }}
          type="text"
          placeholder="Name"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
        />
        <input
          style={{ width: "75%", height: "100px", marginBottom: "25px" }}
          type="text"
          placeholder="Summary"
          value={newProject.summary}
          onChange={(e) =>
            setNewProject({ ...newProject, summary: e.target.value })
          }
        />
        <input
          style={{ width: "75%", height: "150px", marginBottom: "25px" }}
          type="text"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
        />
        <button onClick={addProject}>Add Project</button>
      </div>

      {/* right-side */}
      <div className="right-update-container">
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              {project.name}
              <button onClick={() => deleteProject(project._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UpdateProjects;
