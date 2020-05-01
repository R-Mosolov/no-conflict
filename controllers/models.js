const mongoose = require("mongoose");

const testAnswersSchema = new mongoose.Schema({
    questionNumber: Number,
    answerValue: String,
});
