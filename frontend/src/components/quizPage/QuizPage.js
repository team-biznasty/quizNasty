import React, { useState } from "react";
import Replacer from "../../lib/Replacer";
import GameEnd from "./GameEnd";
import QuizForm from "../../lib/quizGen";
import Answer from "./Answer";

const Quiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [gameEnd, setGameEnd] = useState(false);
  const [gameStart, setGameStart] = useState(false);
  //pretty sure I'm not quite updating GameEnd and GameStart in the right places.

  const onSubmit = () => {
    playQuiz();
    console.log(gameStart)
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

  const shuffle = (array) => {
    let shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  const playQuiz = () => {
    //something like this to update the states?
    if (count === 5) {
      setGameStart(true);
      setGameEnd(false);
    }
    console.log("hello")
    // so the console logs hello so Submit is invoking playQuiz but for some reason line 56 Cannot read property 'question' of undefined.  
    // I'm not sure why that is. Worked when it was in the return down the bottom, doesn't when its put in a function ¯\_(ツ)_/¯ 
    return (
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
    );
  };

  return (
    <div>
      <div className="currentScore gameDetails">
        <h2>Total Score: {score}</h2>
      </div>
      <div className="currentQuestion gameDetails">
        <h2>Current Question #{count + 1}</h2>
      </div>
      {(questions.length <= 0 || count > 4) ? 
      (questions.length > 0 && count === questions.length  ) ?
      <h1>Game Over</h1> :
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
