const express = require("express");
const NotesController = require("../controllers/notes.controller");
const router = express.Router();
const errorHandler = require("../utils/errorHandler");

const { getAllNotes, getNote, createNewNote, updateNote, deleteNote } =
  NotesController;

router
  .route("/")
  .get(errorHandler, getAllNotes)
  .post(errorHandler, createNewNote);
router
  .route("/:id")
  .get(errorHandler, getNote)
  .put(updateNote)
  .delete(deleteNote);
module.exports = router;
