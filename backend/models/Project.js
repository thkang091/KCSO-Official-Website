const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  summary: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", ProjectSchema);
