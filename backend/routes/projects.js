const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

//get Projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

//update a Project
router.post("/", async (req, res) => {
  const { name, summary, description } = req.body;
  const newProject = new Project({ name, summary, description });
  await newProject.save();
  res.status(201).json(newProjec);
});

//get a specific Project
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.json(project);
    } else {
      res.status(404).send("Project not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete a Project
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Project.findByIdAndDelete(id);
  res.status(204).send();
});

module.exports = router;
