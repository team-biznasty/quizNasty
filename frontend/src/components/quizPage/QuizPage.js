import React, { useState, useEffect } from "react";

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

 // const questionCount = Regexer(questionComponents[count]);
  const answerList = questions.map((question, index) => {
    const answers = [question.correct_answer, ...question.incorrect_answers];
    function scoreIncrease() {
      setCount(count + 1);

      setScore(score + 1)
    }

    answers.sort(() => Math.random() - 0.5);
    return (
      <div key={question.id}>
        {answers.map((answer, idx) => {
          if (answer === question.correct_answer) {
            return (
              <p className="correct_answer" key={idx}>
                <button onClick={scoreIncrease}> {answer} </button>
              </p>
            );
          } else {
            return (
              <p className="incorrect_answer" key={idx}>
                <button classname="incorrect" onClick={() => setCount(count + 1)}>{answer}</button>
              </p>
            );
          }
        })}
      </div>
    );
  });

  console.log(answerList);
  const answerCount = answerList[count];
  return (

    <div>
      {/* {questionComponents.length > 0 ? questionComponents : null} */}
      {questionCount}
      {answerCount}
      {score}
      {count}
    </div>
  )
}


export default Quiz;
