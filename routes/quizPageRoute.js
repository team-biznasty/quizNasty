const router = require("express").Router();
const QuizResults = require("../models/QuizResults");

router.post("/", async (req, res) => {
    const name = req.body.name;
    const difficulty = req.body.difficulty;
    const category = req.body.category;
    const amount = req.body.amount;
    const score = req.body.score;
    new QuizResults({
        name:name,
        difficulty:difficulty,
        category:category,
        amount:amount,
        score:score,
    }).save((err, obj) => {
        if (err) {
          res.status(500).json({ msg: error });
        } else {
          res.status(200).json(obj);
        }
      });
});

module.exports = router;