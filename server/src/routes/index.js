const express = require("express");
const router = require("./notes.route");
const AppError = require("../utils/appError");
const errorHandler = require("../utils/errorHandler");
express.Router();

function Router(app) {
  app.use(errorHandler);

  app.get("/", (req, res) => {
    res.status(200).json("Welcom to my app");
  });

  app.use("/api/v1/notes/", router);

  app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
  });
}

module.exports = Router;
