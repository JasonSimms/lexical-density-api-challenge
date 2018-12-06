// Filename: wordModel.js
// Mongoose model Schema for non-lexical-words

const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const wordSchema = new Schema({
    term: {
        type: String,
        required: true,
        unique: true,
    },
    inputDate: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Word", wordSchema)

