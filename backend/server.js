require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const projectRoutes = require("./routes/projects");
const homeRoutes = require("./routes/home");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const mongoDBAtlasUri =
  "mongodb+srv://austinkang7777:824317aBc!@cluster0.bjeqyil.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongoDBAtlasUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connect on MongoDB"))
  .catch((err) => console.error("Fail to connect on MongoDB", err));

// app.use(express.static(path.join(__dirname, "..frontend/build")));a
app.use("/projects", projectRoutes);
app.use(homeRoutes);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
