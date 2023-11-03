const express = require("express");
const app = express();
const  globalErrorHandler=require('./handler/errorController')
const AppError=require('./handler/AppError');

app.all("*", (req, res, next) => {
  next(new AppError("TypeError", 404));
});

app.use(globalErrorHandler);

module.exports = app;
