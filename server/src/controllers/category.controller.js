const connection = require("../configs/db.config");

class CategoryController {
  getAllCategories(req, res) {
    connection.query("SELECT * FROM `category`", function (err, data, fields) {
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

  getCategory(req, res) {
    if (!req.params.id) {
      return res.status(404).json({
        status: "fail",
        message: "No Category Found By Id",
      });
    }
    connection.query(
      "SELECT * FROM `category` WHERE `category_id` = ?",
      [req.params.id],
      function (err, data, fields) {
        res.status(200).json({
          status: "success",
          data: data,
        });
      }
    );
  }

  createNewCategory(req, res) {
    if (!req.body) {
      return res.status(404).json({
        status: "fail",
        message: "No Form data found",
      });
    }
    const value = [req.body.name];
    connection.query(
      "INSERT INTO `category` (name) VALUES(?)",
      [value],
      function (err, data, fields) {
        if (err) {
          res.status(500).json({
            status: "fail",
            message: err,
          });
        } else {
          res.status(200).json({
            status: "success",
            message: "New category is created",
          });
        }
      }
    );
  }
}

module.exports = new CategoryController();
