import dotenv from "dotenv"
dotenv.config()

import config from "config"
import express from "express"

const host = config.get("server.host")
const port = config.get("server.port")

const app = express()

const listener = app.listen(port, host, () => {
  console.log(`Server listening on port: ${listener.address().port}`)  
})