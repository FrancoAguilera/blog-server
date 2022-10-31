require("dotenv").config();

const colors = require("colors/safe");
const mongoose = require("mongoose");
const mongoString = process.env.DB_CONNECTION;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(colors.red(error));
});

database.once("connected", () => {
  console.log(colors.green("// DB connection successful"));
});
