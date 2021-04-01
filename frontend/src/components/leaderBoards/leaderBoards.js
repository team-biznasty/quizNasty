import "./leaderboard.css";
import axios from 'axios';
import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [Results, setResults] = useState([]);

  const getScores = async () => {
    await axios.post("http://localhost:5000/quiz").then((res) => {
      setResults(res.data.results.flatMap((user) => {return user.results.map((result) => {
        result.username = user.username;
        return result
    })}).sort((Results, result) => {return result.points - Results.points}));
});
};

useEffect(() => {
  if (Results.length === 0) {
      getScores();
  } else {
      console.log(Results)
  }
})

  return (

    <div className="leaderboardContainer">
      <h1>Leaderboard</h1>

      <table className="boardsArea">
        <thead className="boardTitles">
          <tr>
            <th></th>
            <th>Users</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
      
          <tr className="boardDetails">
            <td class="numberBoard">1</td>
            <td className="usernameBoard">User001</td>
            <td className="pointsBoard">100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
