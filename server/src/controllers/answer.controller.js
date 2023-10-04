const connection = require("../configs/db.config");

class AnswerController {
  getAllAnswers(req, res) {
    connection.query(
      "SELECT * FROM `category`",
      function (err, results, fields) {
        console.log(results);
        console.log(fields);
      }
    );
  }
}

module.exports = new AnswerController();
