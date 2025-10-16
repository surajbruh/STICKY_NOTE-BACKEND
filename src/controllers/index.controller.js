import Note from "../models/noteModel.js"
import { redisSafe } from "../utils/redisSafe.js"

export const uploadNote = async (req, res) => {
    try {
        const { content } = req.body
        if (!content) return res.status(400).json({ message: "Content is  required" })

        const newNote = await Note.create({ content })
        await redisSafe.del("cachedNotes") //delete stale cache data

        res.status(201).json({
            message: "Note saved successfully",
            newNote
        })
    } catch (error) {
        console.error("/API/UPLOAD ENDPOINT ERROR", error.message)
        return res.status(500).json("Something went wrong")
    }
}

export const getNotes = async (req, res) => {
    try {
        // cache
        const cachedNotes = await redisSafe.get("cachedNotes")
        if (cachedNotes) {
            console.log("cached data")
            return res.status(200).json(JSON.parse(cachedNotes))
        }

        const notes = await Note.find()

        //set cache
        await redisSafe.setEx("cachedNotes", 300, JSON.stringify(notes))

        console.log('fresh data')
        res.status(200).json(notes)
    } catch (error) {
        console.error("/API/NOTES ENDPOINT ERROR", error.message)
        return res.status(500).json("Something went wrong")
    }
}

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params

        const note = await Note.findByIdAndDelete(id)
        await redisSafe.del("cachedNotes") //delete stale cache data

        res.status(200).json({ message: "Note deleted successfully", note })
    } catch (error) {
        console.error("/API/NOTE/DELETE ENDPOINT ERROR", error.message)
        return res.status(500).json("Something went wrong")
    }
}

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params
        const { content } = req.body

        if (!content) return res.status(400).json({ message: "Content is required" })

        const note = await Note.findByIdAndUpdate(id, { content }, { new: true })

        if (!note) return res.status(404).json({ message: "Note not found" })

        await redisSafe.del("cachedNotes") //delete stale cache data
        res.status(200).json({
            message: "Note updated succesfully",
            updatedNote: note
        })
    } catch (error) {
        console.error("/API/NOTE/UPDATE ENDPOINT ERROR", error.message)
        return res.status(500).json("Something went wrong")
    }
}