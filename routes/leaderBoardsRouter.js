const router = require("express").Router();
const QuizResults = require("../models/QuizResults");

//instead of "name": "Paul" should be sessionStorage.user

router.get("/quizresults", async (req, res) => {
    QuizResults.find({}, (err, obj) => {
        if (err) {
            return res.status(400).json({
                errorMessage: "You have not posted any high scores"
            });
        } else {
            return res.status(200).json(obj)
        }
    });
});

module.exports = router;