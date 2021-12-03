const express = require('express')
const app = express()
const port = 5000
const path = require('path');

const dbRouter = require("./routes/db")
app.use(express.static(path.join(__dirname, 'build')));
app.use("/db", dbRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port)