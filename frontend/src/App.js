import "./App.css";
//import SignUp from './components/signUp/SignUp'
import Quiz from "./components/quizPage/QuizPage";
import Navbar from "./components/navBar/Navbar"
// import Footer from "./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Quiz />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
