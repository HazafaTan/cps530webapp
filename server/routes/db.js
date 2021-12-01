// Router for a db, current idea: Store the amount of clicks on the website

const express = require("Express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("This is the endpoint for the db")
})

router.get("/add", (req, res) =>{
    res.send("This is the endpoint for adding to the db")
})

router.get("/list", (req, res) =>{
    res.send("This is the endpoint for listing the db")
})

module.exports = router