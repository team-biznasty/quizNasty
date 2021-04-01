import "./leaderboard.css";

const Leaderboard = () => {
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
