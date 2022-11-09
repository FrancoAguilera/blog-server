module.exports = function (app) {
  const routes = require("../routes/login.routes.ts");
  const articles = require("../routes/articles.routes.ts");

  app.use("/login", routes);
  app.use("/articles", articles);
};
