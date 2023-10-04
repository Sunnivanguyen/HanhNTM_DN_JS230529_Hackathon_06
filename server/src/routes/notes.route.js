const express = require("express");
const NotesController = require("../controllers/notes.controller");
const router = express.Router();

const { getAllNotes, getNote, createNewNote, updateNote, deleteNote } =
  NotesController;

router.route("/").get(getAllNotes).post(createNewNote);
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);
module.exports = router;
