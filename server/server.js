const express = require('express')
const app = express()
const port = 5000
var fs = require('fs')

app.get("/", (req, res) => {
    console.log("/ route hit")
    res.send("Hello, this is from the backend!")
})

const dbRouter = require("./routes/db")

app.use("/db", dbRouter)

app.listen(port)