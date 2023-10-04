const express = require("express");
const AnswerController = require("../controllers/answer.controller");
const router = express.Router();

const { getAllAnswers } = AnswerController;

router.route("/").get(getAllAnswers);

module.exports = router;
