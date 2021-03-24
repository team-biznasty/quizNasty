import React, { useState, useEffect } from "react";

const Quiz = () => {
  //fetch single game - just change the id - use insomnia or compass or game._id
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple`
      );
      const data = await response.json();
      setQuestion(data);
    };
    getter();
  }, []);

  console.log(question)
  console.log(question.results[0].type)

  

  /* console.log(question[0].category)
  console.log(question[0].question) */


  return (
    <div >
      <h3>
        <p> {question.type}</p>
        <p> {question.correct_answer}</p>
        <p> {question.incorrect_answers}</p>
        <p> {question.question}</p>
      </h3>
    </div>
  );
};

export default Quiz; 