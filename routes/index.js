const express = require("express");
const router = express.Router();

/* GET root page. */
router.get("/", (req, res, next) => {
  res.json({ response: "Endpoint active" });
});

module.exports = router;
