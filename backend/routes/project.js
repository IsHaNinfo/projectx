const express = require("express");

const { project } = require("../controllers/projectController");

const router = express.Router();

router.post("/creatproject", project);

module.exports = router;
