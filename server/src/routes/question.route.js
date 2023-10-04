const express = require("express");

const QuestionController = require("../controllers/question.controller");

const router = express.Router();

const {
  getQuestion,
  createNewQuestion,
  getAnswersBelongsToQuestion,
  getAllQuestions,
  getQuestionWithCondition,
} = QuestionController;

router.route("/").get(getAllQuestions).post(createNewQuestion);
router.route("/condition").get(getQuestionWithCondition);
router.route("/:id").get(getQuestion);
router.route("/:id/answers").get(getAnswersBelongsToQuestion);

module.exports = router;
