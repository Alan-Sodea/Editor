const mongoose = require("mongoose");

module.exports = mongoose.model("Notes", {
    title : String,
    password : String,
    types : [String],
    values : [String]
})

