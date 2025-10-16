import express from "express"
import { deleteNote, getNotes, uploadNote } from "../controllers/index.controller.js"

const router = express.Router()
export default router

router.post("/api/notes/upload", uploadNote)
router.get("/api/note/notes", getNotes)
router.delete("/api/note/delete/:id", deleteNote)