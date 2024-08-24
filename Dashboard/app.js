const express = require("express");
const path = require("path");
const app = express();

app.use("/dashboard", express.static("Dashboard"));


app.get('/', (req, res) => {
    res.status(200)
    .send("Welcome to the bindas music player static host")
})

app.listen(80, () => {
    console.log("app listnening on port 80");
});