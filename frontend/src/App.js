import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//import SignUp from './components/signUp/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Quiz from "./components/quizPage/QuizPage";
import Navbar from "./components/navBar/Navbar";
import Login from "./components/logIn/logIn";
import Footer from "./components/footer/footer";
import Homepage from "./components/homePage/homePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Homepage />
      <Switch>
      <div className="contentArea">
      <Route exact path="/">
        <Quiz />
        </Route>
        <Route exact path="/login">
        <Login />
        </Route>
      </div>
      </Switch>
      <div className="footerArea">
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
