const express = require("express");
const router = express.Router();

const api = require("../controllers/login.controller.ts");

/* GET login page. */
router.post("/", async (req, res) => {
  api.loginUser(req, res);
});

module.exports = router;
