const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.mongoUser}:${process.env.mongoPassword}@quiznasty01.xzhfa.mongodb.net/${process.env.mongoDB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully!");
});

const leaderBoardsRouter = require("./routes/leaderBoardsRouter");
const signUpRouter = require("./routes/signUpRouter");
const quizPageRoute = require("./routes/quizPageRoute");
const logInRoute = require("./routes/logInRouter");

app.use("/scores", leaderBoardsRouter);
app.use("/auth", signUpRouter);
app.use("/quiz", quizPageRoute);
app.use("/auth", logInRoute)
app.use(express.json());

app.listen(5000, () => {
  console.log("Listening to port 5000");
});

// app.get('/', (req, res) => {
//     new User({name:"Use",email:"user@email.com",password:"1234"}).save((err, obj) => {
//         if (err){
//             res.status(500).json({status:"Not Working", err});
//         } else {
//         res.status(200).json({status:"Working", obj});
//         }
//     });
// });
