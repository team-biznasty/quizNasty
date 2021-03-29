

const Leaderboard = () => {
    return (
        
        <div className="leaderboardContainer">
            <h1>Leaderboard</h1>
            <div className="boardsArea">
                <div className="totalScoreBoard">
                        <h2 className="boardTitle">By Total Score</h2>

                    <div className="boardTitles">
                        <h6>Users</h6>
                        <h6>Score</h6>
                    </div>

                    <div className="usersBoard">
                        <div className="userArea">
                            <h3>
                                <span>1)</span>
                                <span>User001</span>
                                <span>User001</span>
                                <span>100</span>
                            </h3>
                        </div>
                    </div>

                    <div className="seeMoreBtn"><h3>See More</h3></div>
                </div>

                <div className="gameScoreBoard">
                    <div className="boardTitles">
                        <h6>Users</h6>
                        <h6>Score</h6>
                    </div>

                    <div className="usersBoard">
                        <h2 className="boardTitle">By Game Score</h2>

                        <div className="userArea">
                            <h3>
                                <span>1)</span>
                                <span>User001</span>
                                <span>User001</span>
                                <span>100</span>
                            </h3>
                        </div>
                    </div>

                    <div className="seeMoreBtn"><h3>See More</h3></div>

                </div>
            </div>
        </div>
    )
}

export default Leaderboard;