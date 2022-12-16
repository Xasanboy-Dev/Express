import express, { Request, Response } from "express"
import { GetMethod, PostMethod, EditMethod, DeleteMethod } from "../Functions/Functions"
const server = express()
import { Users } from "../Users/Users"
server.use(express.json())

// Get Method
server.get("/HomePage", GetMethod)

// Post Method
server.post("/HomePage/register", PostMethod)

// Delete Method
server.delete("/HomePage/remove/id::id", DeleteMethod)

// Edit the profile
server.put("/HomePage/edit/id::id", EditMethod)

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`)
})