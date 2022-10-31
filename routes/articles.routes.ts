const express = require("express");
const router = express.Router();

const api = require("../controllers/articles.controller.ts");

router
  .get("/", async (req, res) => api.getAllArticles(req, res))
  .get("/:_id", async (req, res) => api.getArticleById(req, res))
  .post("/", async (req, res) => api.createArticle(req, res))
  .put("/:id", async (req, res) => api.updateArticle(req, res))
  .delete("/:id", async (req, res) => api.deleteArticle(req, res));

module.exports = router;
