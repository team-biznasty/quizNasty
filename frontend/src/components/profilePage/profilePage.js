function Profile(props) {
  return (
    <div className="profileContainer">

      <h1>{(sessionStorage.getItem("name")) ? 
      (<h1>{sessionStorage.getItem("name")}</h1>) : (<h1>Hi Nasty User!</h1>)}</h1>

      <div className="checkButtons">
        <button className="yellowBtn">Check Your Level</button>
        <button className="blueBtn">Your Past Quizzes</button>
      </div>

      <h2>or select a topic to get nasty</h2>


      <div className="topicsContainer">
        <button className="topicBtn blueBtn">Science</button>
        <button className="topicBtn yellowBtn">Culture</button>
        <button className="topicBtn blueBtn">Computers</button>
        <button className="topicBtn yellowBtn">History</button>
        <button className="topicBtn blueBtn">Sports</button>
        <button className="topicBtn yellowBtn">Music</button>
        <button className="topicBtn blueBtn">Celebs</button>
        <button className="topicBtn yellowBtn">Vehicles</button>
        <button className="topicBtn blueBtn">Politics</button>
      </div>
    </div>
  );
}

export default Profile;


//It needs a routing for buttons to go to quiz page as selected the topics
//or maybe just added quiz form here 