// a component using axios.post to submit scores once quiz is finished.
// quizPage will need to send the quiz data here with props
import axios from "axios";
import { useHistory } from "react-router-dom";


const PostScore = async (props) => {
    let history = useHistory();

    try {
        const response = await axios.post("http://localhost:5000/quiz", {
            name: sessionStorage.getItem("user"), 
            difficulty: props.difficulty, 
            category: props.category, 
            amount: props.amount, 
            score: props.score,
        });
        const data = await response.data;
        console.log(data);
        if (response.status === 200) {
            console.log("Score Submitted")
            history.push("/")
            //how can you add an alert to tell the user it was successful?
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        console.log(error)
    }

    return (
        <div className="submitScore">
            <button className="submitScoreButton" type="submit">
                Submit Score
            </button>
        </div>
    );
};

export default PostScore;
