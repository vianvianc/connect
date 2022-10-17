const { Schema, model } = require("mongoose");




const weeklySchema = new Schema({
    tableTopics: { type: String, unique: true },

    quoteDay: { type: String, unique: true },
    author: { type: String, unique: true },

});

const Weekly = model("Weekly", weeklySchema)

module.exports = Weekly;
