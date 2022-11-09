const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

require("./bootstrap/db");
require("./bootstrap/bootstrap")(app);
require("./bootstrap/routes")(app);
require("./bootstrap/error")(app);

try {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
} catch (error) {
  console.error(error);
  process.exit(1);
}
