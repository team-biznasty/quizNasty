import "./leaderboard.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getter = async () => {
      const response = await fetch(`http://localhost:5000/scores/quizresults`);
      const data = await response.json();
      console.log(data);
      setResults(data);
    };
    getter();
  }, []);

  return (
    <div className="leaderboardContainer">
      <h1>Leaderboard</h1>

      <table className="boardsArea">
        <thead className="boardTitles">
          <tr>
            <th>Users</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
              return(
            <tr className="boardDetails">
              <td className="usernameBoard" key={result._id}>
                {result.name}
              </td>
              <td className="pointsBoard" key={index}>
                {result.score}
              </td>
            </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Leaderboard;

/* const getScores = async () => {
    await axios.post("http://localhost:5000/quiz").then((res) => {
      setResults(
        res.data.results
          .flatMap((name) => {
            return name.results.map((result) => {
              return result;
            });
          })
          .sort((Results, result) => {
            return result.score - Results.score;
          })
      );
    });
  };
 */
/* useEffect(() => {
    if (Results.length === 0) {
      getScores();
    } else {
      console.log(Results);
    }
  }); */

/* Results.filter((result) => {
    return result;
  }).map((result) => ( */

/*     const id = results.id;

    const getResults = () => {
        axios.get("http://localhost:5000/quiz")
            .then((response) =>{
                const results = setResults(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.log("error here", err);
            });
    }

    useEffect (() => {
        getResults();
    }, []); */
