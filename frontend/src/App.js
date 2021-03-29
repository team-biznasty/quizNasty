import "./App.css";
//import SignUp from './components/signUp/SignUp'
import Quiz from "./components/quizPage/QuizPage";
import Navbar from "./components/navBar/navBar.js";
import Login from "./components/logIn/logIn";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="contentArea">
        <Quiz />
        <Login />
      </div>

      <div className="footerArea">
        <Footer />
      </div>
    </div>
  );
}

export default App;
