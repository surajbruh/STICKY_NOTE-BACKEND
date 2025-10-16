import mongoose from "mongoose"

const validateId = (req, res, next) => {
    try {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid note ID" })
        }
        next()
    } catch (error) {
        console.error("VALIDATE_ID MIDDLEWARE ERROR", error.message)
        return res.status(500).json("Something went wrong")
    }
}
export default validateId