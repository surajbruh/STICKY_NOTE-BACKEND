import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./config/db.config.js"
import router from "./routes/index.routes.js"
import redisClient from "./config/redis.config.js"
import mongoose from "mongoose"

//ENV VAR
dotenv.config({
    path: "./.env"
})

const app = express()
const PORT = process.env.PORT

// CORS
const origin = ["http://localhost:5173","https://sticky-note-frontend.vercel.app"]
app.use(cors({
    origin
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", router)

// START SERVER
async function startServer(params) {
    try {
        await redisClient.connect()
        console.log("REDIS CONNECTED")

        await connectDB()
        app.listen(PORT, () => {
            console.log(`🚀 SERVER IS RUNNING AT PORT ${PORT}`)
        })
    } catch (error) {
        console.error("Server Error: ", error.message)
    }
}
startServer()

//GRACEFUL SHUTDOWN
process.on("SIGINT", async () => {
    console.log("SERVER SHUTTING DOWN!")
    try {
        await redisClient.quit()
        console.log("REDIS CLIENT DISCONNECTED")

        if (mongoose.connection.readyState === 1) {
            await mongoose.connection.close()
            console.log("MONGO_DB CONNECTION CLOSED")
        }

        setTimeout(() => process.exit(0), 250);
    } catch (error) {
        console.error("⚠️ ERROR DURING SHUTDONW:", error.message)
        setTimeout(() => process.exit(1), 250)
    }
})