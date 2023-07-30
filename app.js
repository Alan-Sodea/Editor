const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Note = require("./Models/notes");
const bodyParser = require("body-parser");

app.set("views", "./Templates");
app.set("view engine", "ejs");

app.use(express.static("./Static"))
app.use(bodyParser.urlencoded({ extended: false }));

let load = [];

app.get("/", (req, res) =>
{
    res.status(200).render("index");
});

app.listen(8000);
console.log("Waiting on port 8000");
