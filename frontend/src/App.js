import "./App.css";
//import SignUp from './components/signUp/SignUp'
import Quiz from "./components/quizPage/QuizPage";
import Navbar from "./components/navBar/Navbar";
import Login from "./components/logIn/logIn";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Quiz />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
