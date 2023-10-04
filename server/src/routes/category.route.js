const express = require("express");
const CategoryController = require("../controllers/category.controller");
const router = express.Router();

const { getAllCategories, getCategory, createNewCategory } = CategoryController;

router.route("/").get(getAllCategories).post(createNewCategory);
router.route("/:id").get(getCategory);

module.exports = router;
