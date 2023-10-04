const Notes = require("../models/notes.model");

class NotesController {
  async getAllNotes(req, res) {
    try {
      const notes = await Notes.findAll();
      res.status(200).json({ status: "success", data: { notes } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error });
    }
  }
  async getNote(req, res) {
    try {
      const id = req.params.id;
      const note = await Notes.findPk(id);
      res.status(200).json({ status: "success", data: { note } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error });
    }
  }

  async createNewNote(req, res) {
    try {
      const newNote = await Notes.create({
        text: req.body?.text,
        isDone: req.body?.isDone,
      });
      res.status(200).json({ status: "success", data: { newNote } });
    } catch (error) {
      res.status(400).json({ status: "fail", message: error });
    }
  }

  async updateNote(req, res) {
    try {
      const id = req.params.id;
      const result = await Notes.update(
        {
          text: req.body?.text,
          isDone: req.body?.isDone,
        },
        { where: { id } }
      );
      console.log(result);
      if (result[0] !== 1) {
        res
          .status(404)
          .json({ status: "fail", message: "Notes not found by id" });
      } else {
        res.status(400).json({ status: "success", data: { text, isDone, id } });
      }
    } catch (error) {
      res.status(400).json({
        status: "fail",
        msg: error,
      });
    }
  }

  async deleteNote(req, res) {
    try {
      const id = req.params.id;
      const result = await Notes.destroy({ where: { id } });
      if (!result) {
        res.status(404).json({ status: "fail", msg: "Notes not found by id" });
      } else {
        res.status(200).json({ status: "success" });
      }
    } catch (error) {
      res.status(400).json({ status: "fail", msg: error });
    }
  }
}

module.exports = new NotesController();
