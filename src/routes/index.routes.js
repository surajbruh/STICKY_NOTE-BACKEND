import express from "express"
import { deleteNote, getNotes, updateNote, uploadNote } from "../controllers/index.controller.js"
import validateId from "../middleware/validateId.middleware.js"

const router = express.Router()
export default router

router.post("/api/notes/upload", uploadNote)
router.get("/api/note/notes", getNotes)
router.delete("/api/note/delete/:id", validateId, deleteNote)
router.patch("/api/note/update/:id", validateId, updateNote)