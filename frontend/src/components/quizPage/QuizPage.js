import React, { useState, useEffect } from "react";
import Replacer from "../../lib/Replacer";
// import PostScore from "../postingScore/PostingScore";
import QuizForm from "../../lib/quizGen";
import Answer from "./Answer";
import axios from 'axios';

const Quiz = (props) => {
  //fetch single game - just change the id - use insomnia or compass or game._id
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = () => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const data = await response.json();
      setQuestions(
        data.results.map((question, index) => {
          return {
            category: question.category,
            type: question.type,
            difficulty: question.difficulty,
            question: Replacer(question.question),
            answers: shuffle([
              question.correct_answer,
              ...question.incorrect_answers,
            ]).map((text) => Replacer(text)),
            correctAnswer: Replacer(question.correct_answer),
          };
        })
      );
    };
    getter();
  };

const submitScore = async (event) => {
  event.preventDefault();
  alert("It worked");


    try {
        const response = await axios.post("http://localhost:5000/quiz", {
            name: sessionStorage.getItem("name"), 
            // difficulty: difficulty, 
            // category: category, 
            // amount: 5, 
            score: score,
        });
        const data = await response.data;
        console.log(data);
        if (response.status === 200) {
            alert("Score Submitted")
            //how can you add an alert to tell the user it was successful?
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        console.log(error)
    }

} 

  const shuffle = (array) => {
    let shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  return (
    <div>
      <QuizForm
        onSubmit={onSubmit}
        category={category}
        setCategory={setCategory}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <div className="currentScore gameDetails">
        <h2>Total Score: {score}</h2>
      </div>
      <div className="currentQuestion gameDetails">
        <h2>Current Question #{count+1}</h2>
      </div>
      {(questions.length <= 0 || count > 4) ? 
      (questions.length > 0 && count === questions.length  ) ?
      <button className="submitScore" onClick={submitScore}>Submit Score</button> :
      null :
            (
        <div>
          {" "}
          <div className="current">
            <h1>{questions[count].question}</h1>
          </div>
          {questions[count].answers.map((answer, index) => {
            return (
              <Answer
                text={answer}
                key={index}
                isCorrect={answer === questions[count].correctAnswer}
                score={score}
                setScore={setScore}
                count={count}
                setCount={setCount}
              />
            );
          })}{" "}
        </div>
      )    }
      
      {/* <PostScore difficulty={difficulty} category={category} amount={amount} score={score} /> */}
    </div>
  );
};

export default Quiz;