import "./App.css";
//import SignUp from './components/signUp/SignUp'
import Quiz from "./components/quizPage/QuizPage";
import Navbar from "./components/navBar/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Quiz />
    </div>
  );
}

export default App;
