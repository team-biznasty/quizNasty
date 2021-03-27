const mongoose = require('mongoose');

const QuizResults = new mongoose.Schema({
    name: {type: String, required:true},
    difficulty: {type: String, required:true},
    category: {type: String, required:true},
    amount: {type: Number, required: true},
    score: {type: Number, required: true},
});

module.exports = mongoose.model('quizresults', QuizResults);