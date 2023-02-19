const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  project,
  changepersentage,
} = require("../controllers/projectController");

const router = express.Router();
router.use(requireAuth);
router.post("/creatproject", project);
router.post("/changepersentage", changepersentage);

module.exports = router;
