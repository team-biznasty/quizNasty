import React, { useState, useEffect } from "react";

setTimeout(() => console.log("hiya"), 0);

const Quiz = () => {
  //fetch single game - just change the id - use insomnia or compass or game._id
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState([]);

  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&category=18&difficulty=hard&type=multiple`
      );
      const data = await response.json();
      console.log(data);
      setQuestions(data.results);
    };
    getter();
  }, []);

  const questionComponents = questions.map((question, index) => {
    return <div key={index}>{question.question}</div>;
  });

  const questionCount = questionComponents[count];

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
