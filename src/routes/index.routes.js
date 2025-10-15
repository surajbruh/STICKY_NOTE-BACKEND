import express from "express"
import Note from "../models/noteModel.js"

const router = express.Router()
export default router

router.post("/api/note/upload", async (req, res) => {
    try {
        const { content } = req.body
        if (!content) return res.status(400).json({ message: "Content is  required" })

        const newNote = await Note.create({ content })

        res.status(201).json({
            message: "Note saved successfully",
            Note: newNote
        })
    } catch (error) {
        console.error("/API/UPLOAD ENDPOING ERROR", error.message)
        return res.status(500).json("Something went wrong")
    }
})

// TODO: ADD GET, DELETE ROUTE