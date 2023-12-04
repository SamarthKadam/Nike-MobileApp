const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./config.env" });
const DBAuth = process.env.DB.replace("<password>", process.env.DBpassword);
mongoose
  .connect(DBAuth, {
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection successful");
  });

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection");
});
const port = 8000;
app.listen(port, "192.168.1.5", () => {
  console.log(`SERVER RUNNING IN PORTNO:${port}`);
});
