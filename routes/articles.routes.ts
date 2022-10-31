const express = require("express");
const router = express.Router();
const Articles = require("../models/article.model.ts");

router.get("/", async (req, res, next) => {
  const allArticles = await Articles.find();
  return res.status(200).json(allArticles);
});

router.post("/", async (req, res, next) => {
  const newArticle = new Articles({
    title: "JS Array methods",
    content: "HTML content for the article content related to array methods",
    author: "Franco Aguilera",
  });
  const insertedArticle = await newArticle.save();
  return res.status(201).json(insertedArticle);
});

module.exports = router;
