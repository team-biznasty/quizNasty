import "./App.css";
//import SignUp from './components/signUp/SignUp'
import Quiz from "./components/quizPage/QuizPage";
import Navbar from "./components/navBar/navBar";
import Login from "./components/logIn/logIn";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Quiz />
      <Login />
    </div>
  );
}

export default App;
