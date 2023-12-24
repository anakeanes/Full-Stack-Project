import express from "express"
let server = express()
server.listen(30000)
server.use(express.static("public"))

