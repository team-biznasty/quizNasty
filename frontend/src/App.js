import "./App.css";
//import SignUp from './components/signUp/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Quiz from "./components/quizPage/QuizPage";
import Navbar from "./components/navBar/Navbar";
import Login from "./components/logIn/logIn";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
      <div className="contentArea">
      <Route exact path="/">
        <Quiz />
        </Route>
        <Route exact path="/login">
        <Login />
        </Route>
      </div>
      <div className="footerArea">
        <Footer />
      </div>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
