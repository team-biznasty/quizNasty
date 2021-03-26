const Answers = (props) => {
  const setScore = props.setScore;
  const score = props.score;
  const count = props.count;
  const setCount = props.setCount;
  const questions = props.questions;

  
  const answerList = questions.map((question, index) => {
    const answers = [question.correct_answer, ...question.incorrect_answers];
    answers.sort(() => Math.random() - 0.5);
    const scoreIncrease = () => {
    setCount(count + 1);
    setScore(score + 1)
    };
    return (
      <div key={question.id}>
        {answers.map((answer, idx) => {
          if (answer === question.correct_answer) {
            return (
              <p className="correct_answer" key={idx}>
                <button className="correctButton" onClick={scoreIncrease}> {answer} </button>
              </p>
            );
          } else {
            return (
              <p className="incorrect_answer" key={idx}>
                  <button className="incorrectButton" onClick={() => setCount(count + 1)}>{answer}</button>
              </p>
            );
          }
        })}
      </div>
    );
  });

  return (
      <div>{answerList}</div>
  )
};
export default Answers;

// create answer component that will contain property isCorrect?
//
// if answercomponent meets isCorrect score will update by 1
// update counter so new questions and answers are generated

//<Answer isCorrect={true} score={score} setScore={setScore} counter={counter} setCounter={setCounter}/>

// function answerHandler(){
//     return(answer.body === question.correct_answer? {scoreIncrease} : setScore(score))
// }

// const scoreIncrease = {
//     setScore(score+1)
// }
