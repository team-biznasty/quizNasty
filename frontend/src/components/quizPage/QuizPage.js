import React, { useState, useEffect } from "react";
import Answer from "./Answer";

setTimeout(() => console.log("hiya"), 0);

const Quiz = () => {
  //fetch single game - just change the id - use insomnia or compass or game._id
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  // const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple`
      );
      const data = await response.json();
      const q1 = data.results[0].question
      console.log(q1)
      const tmpregex = /&quot;/g;
      console.log(q1.replace(tmpregex, "\""));
      setQuestions(data.results);
      // setAnswers(data.results)
    };
    getter();
  }, []);

  const questionComponents = questions.map((question, index) => {
    return <div key={question.id}>{question.question}</div>;
  });

  const questionCount = questionComponents[count];
  return (

    <div>
      {/* {questionComponents.length > 0 ? questionComponents : null} */}
      {questionCount}
      <Answer isCorrect={true} score={score} setScore={setScore} counter={count} setCounter={setCount} questions={questions}/>
      {score}
      {count}
    </div>
  )
}


export default Quiz;
