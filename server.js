const express = require("express");

// CREATING SIMPLE NODE.JS SERVER
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(3000);

