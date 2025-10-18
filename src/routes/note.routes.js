import express from "express";
import { deleteNote, getNotes, pinNote, updateNote, uploadNote } from "../controllers/note.controller.js";
import validateId from "../middleware/validateId.middleware.js";

const noteRouter = express.Router();

noteRouter.route("/")
    .get(getNotes) // Get all notes
    .post(uploadNote); // Create a new note

noteRouter.route("/:id")
    .patch(validateId, updateNote) // Update note
    .delete(validateId, deleteNote); // Delete note

noteRouter.patch("/:id/pin", validateId, pinNote); // Pin note

export default noteRouter;