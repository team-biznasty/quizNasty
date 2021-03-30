import { useHistory } from "react-router-dom";

const Homepage = () => {
  let history = useHistory();

  function onRandomQuiz() {
    history.push("/randomquiz");
  }

  function onLeaderboard() {
    history.push("/leaderboard");
  }

  return (
    <div className="circlesWrapper">
      <div className="yellowArea">
        <button
          type="button"
          onClick={onRandomQuiz}
          className="circleBtn yellowBtn"
          id="yellowCircleBtn"
        >
          Start a Nasty Quiz
        </button>
      </div>
      <div className="blueArea">
        <button
          type="button"
          onClick={onLeaderboard}
          className="circleBtn blueBtn"
          id="blueCircleBtn"
        >
          Check Nasty Winners
        </button>
      </div>
    </div>
  );
};

export default Homepage;
