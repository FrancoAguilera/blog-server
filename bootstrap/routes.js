module.exports = function (app) {
  const routes = require("../routes/index.routes.ts");
  const articles = require("../routes/articles.routes.ts");

  app.use("/", routes);
  app.use("/articles", articles);
};
