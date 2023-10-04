const connection = require("../configs/db.config");

class QuestionController {
  getQuestion(req, res) {
    if (!req.params.id) {
      return res.status(404).json({
        status: "fail",
        message: "No Question Found By Id",
      });
    }

    connection.query(
      "SELECT * FROM `question` WHERE `question_id` = ?",
      [req.params.id],
      function (err, data, fields) {
        res.status(200).json({
          status: "success",
          data: data,
        });
      }
    );
  }

  getAnswersBelongsToQuestion(req, res) {
    if (!req.params.id) {
      return res.status(404).json({
        status: "fail",
        message: "No Answer Found By Question Id",
      });
    }
    connection.query(
      "SELECT * FROM `question` INNER JOIN `answer` USING (question_id) WHERE question_id = ?",
      [req.params.id],
      function (err, data, fields) {
        res.status(200).json({
          status: "success",
          data: data,
        });
      }
    );
  }

  getAllQuestions(req, res) {
    connection.query("SELECT * FROM `question`", function (err, data, fields) {
      if (err) {
        res.status(404).json({
          status: "fail",
          message: err,
        });
      } else {
        res.status(200).json({
          status: "fail",
          length: data?.length,
          data: data,
        });
      }
    });
  }

  createNewQuestion(req, res) {
    if (!req.body) {
      return res.status(404).json({
        status: "fail",
        message: "No Form data found",
      });
    }

    const values = [req.body.category_id, req.body.content, req.body.level];

    connection.query(
      "INSERT INTO `question` (category_id, content, level) VALUES (?)",
      [values],
      function (err, data, fields) {
        if (err) {
          res.status(500).json({
            status: "fail",
            message: err,
          });
        } else {
          res.status(200).json({
            status: "success",
            message: "New question is created",
          });
        }
      }
    );
  }

  getQuestionWithCondition(req, res) {
    const { category, level, limit } = req.query;

    if (!category) {
      connection.query(
        "SELECT * FROM `question` WHERE `level` = ? AND `limit` = ?",
        [level, limit],
        function (err, data, fields) {
          res.status(200).json({
            status: "success",
            data: data,
          });
        }
      );
    } else if (!level) {
      connection.query(
        "SELECT * FROM `question` WHERE `category_id` = ? AND `limit` = ?",
        [category, limit],
        function (err, data, fields) {
          res.status(200).json({
            status: "success",
            data: data,
          });
        }
      );
    } else if (!limit) {
      connection.query(
        "SELECT * FROM `question` WHERE `category_id` = ? AND `level`= ?",
        [category, level],
        function (err, data, fields) {
          res.status(200).json({
            status: "success",
            data: data,
          });
        }
      );
    }
  }
}

module.exports = new QuestionController();
