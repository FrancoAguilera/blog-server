const Articles = require("../models/articles.model.ts");

module.exports.getAllArticles = async (req, res) => {
  const allArticles = await Articles.find();
  return res.status(200).json(allArticles);
};

module.exports.getArticleById = async (req, res) => {
  const { _id } = req.params;
  const article = await Articles.findById(_id);
  return res.status(200).json(article);
};

module.exports.createArticle = async (req, res) => {
  const newArticle = new Articles({ ...req.body });
  const insertedArticle = await newArticle.save();
  return res.status(201).json(insertedArticle);
};

module.exports.updateArticle = async (req, res) => {
  const { _id } = req.params;
  await Articles.updateOne({ _id }, req.body);
  const updatedArticle = await Articles.findById(_id);
  return res.status(200).json(updatedArticle);
};
module.exports.deleteArticle = async (req, res) => {
  const { _id } = req.params;
  const deletedArticle = await Articles.findByIdAndDelete(_id);
  return res.status(200).json(deletedArticle);
};
