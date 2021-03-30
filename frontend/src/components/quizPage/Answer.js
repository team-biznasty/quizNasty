import React from "react";

const Answer = (props) => {
  const answerClick = (event) => {
    event.preventDefault();
    if (props.isCorrect) {
      props.setScore(props.score + 1);
    }
    props.setCount(props.count + 1);
  };

  return (
    <div className="answersWrapper">
      <button className="yellowBtn answerBtn" onClick={answerClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Answer;
