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

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "success",
  });
});
const port = 8000;
app.listen(port, "192.168.1.14", () => {
  console.log(`SERVER RUNNING IN PORTNO:${port}`);
});
