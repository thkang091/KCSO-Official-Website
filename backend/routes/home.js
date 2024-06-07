const path = require("path");
const express = require("express");
const rootDir = require("../util/path");

const router = express.Router();

router.use(express.static(path.join(rootDir, "../frontend/build")));

router.get("/", (req, res) => {});

module.exports = router;
