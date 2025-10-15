import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./config/db.config.js"
import router from "./routes/index.routes.js"

//ENV VAR
dotenv.config({
    path: "./.env"
})

const app = express()
const PORT = process.env.PORT

// CORS
const origin = ["http://localhost:5173"]
app.use(cors({
    origin
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", router)

// START SERVER
async function startServer(params) {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING AT PORT ${PORT}`)
        })
    } catch (error) {
        console.error("Server Error: ", error.message)
    }
}
startServer()