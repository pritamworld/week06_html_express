const express = require('express')
const path = require("path");

const app = express()
const SERVER_PORT = process.env.PORT || 3000

app.use(express.static("views"))

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})