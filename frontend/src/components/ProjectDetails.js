import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detailIndex.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`/projects/${projectId}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
      });
  }, [projectId]);

  if (!project) {
    return <div>Project Not Existed</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="detail-container">
        <h1>{project.name}</h1>
        <h2>{project.summary}</h2>
        <p>{project.description}</p>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
