// Router for a db, current idea: Store the amount of clicks on the website

const express = require("Express")
const router = express.Router()
const data = require("/data/basicdata.json")

router.get("/", (req, res) =>{
    res.send("This is the endpoint for the db")
})

router.get("/update", (req, res) =>{
    res.send("This is the endpoint for adding to the db")
})

router.get("/show", (req, res) =>{
    var counter = data["visit_counter"]
    console.log(data)
    res.send("This is the endpoint for listing the db")
})

module.exports = router