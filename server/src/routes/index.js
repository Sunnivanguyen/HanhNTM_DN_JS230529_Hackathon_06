const express = require("express");
const categoryRouter = require("./category.route");
const questionRouter = require("./question.route");
express.Router();

function Router(app) {
  app.use("/api/v1/categories", categoryRouter);
  app.use("/api/v1/questions", questionRouter);
  app.get("/", (req, res) => {
    res.status(200).json("Welcom to my app");
  });
  app.all("*", (req, res, next) => {
    console.log("The URL does not exist");
  });
}

module.exports = Router;
