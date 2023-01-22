import dotenv from "dotenv"
dotenv.config()

import config from "config"
import express from "express"
import morgan from "morgan";

import mountRoutes from "./api/routes/index.js"

const host = config.get("server.host")
const port = config.get("server.port")

const app = express()
app.use(morgan("dev"))
app.use(express.json())

mountRoutes(app)

const listener = app.listen(port, host, () => {
  console.log(`Server listening on port: ${listener.address().port}`)  
})