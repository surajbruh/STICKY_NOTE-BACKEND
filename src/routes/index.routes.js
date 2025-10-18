import express from "express"
import noteRouter from "./note.routes.js"

const router = express.Router()

router.use("/api/notes", noteRouter)

export default router