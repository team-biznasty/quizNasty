// a component using axios.post to submit scores once quiz is finished.
// quizPage will need to send the quiz data here with props
import React from "react";
import axios from "axios";

function GameEnd(props)  {
    
  const postScore = async () => {
    await axios
      .post("http://localhost:5000/scores/quizresults", {
        name: sessionStorage.getItem("name"),
        difficulty: props.difficulty,
        category: props.category,
        amount: 5,
        score: props.score,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("Score Submitted");
          alert("Score Submitted");
          //how can you add an alert to tell the user it was successful?
        } else {
          console.log("something went wrong");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setTimeout(postScore, 2500); 

  const endOfGame = (event) => {
    event.preventDefault();
    props.setGameEnd(true);
    props.setGameStart(false);
  };

  const restartGame = (event) => {
    event.preventDefault();
    props.setGameStart(false);
    props.setGameStart(true);
  };

  return (
    <>
      <div className="submitScore">
        <button className="yellowBtn" onclick={endOfGame}>
          Submit Score
        </button>
      </div>
      <div className="restartGame">
        <button className="restartGame" onclick={restartGame}>
          Restart
        </button>
      </div>
    </>
  );
};

export default GameEnd;
