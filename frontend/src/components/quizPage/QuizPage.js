import React, { useState, useEffect } from "react";

setTimeout(() => console.log("hiya"), 0);

const Quiz = () => {
  //fetch single game - just change the id - use insomnia or compass or game._id
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple`
      );
      const data = await response.json();
      console.log(data);
      setQuestions(data.results);
      setAnswers(data.results)
    };
    getter();
  }, []);

  const questionComponents = questions.map((question, index) => {
    return <div key={index}>{question.question}</div>;
  });
console.log(answers[0].correct_answer)
  const questionCount = questionComponents[count];

/*const answerList = questions.map((answer, index) => {
  return <div key={index}>{answer.correct_answer}</div>
})*/

/*for incorrect answers map over incorrect answerrs and slice them out as individula objects returns
3 seperated objects from the Array

then add the incorrect answers to answer list:
add corecty answer to answer list 
then shuffle
*/

// let answerList = () =>{
//   questions.map((incAnswers, index) => {
//       return((incAnswers.index.incorrect_answers));

// })
// }
// console.log(answerList())
 // const answerCount = answerList[count];

  return (
    <div>
      {/* {questionComponents.length > 0 ? questionComponents : null} */}
      {questionCount}
      <button className="submitButton" onClick={() => setCount(count + 1)}>
        Next Question
      </button>
    </div>
  );
};

export default Quiz;
