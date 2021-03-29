import logo from "../../assets/logo.png";
import SignUp from "../signUp/SignUp";
import Login from "../logIn/logIn";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const navBar = () => {
  return (
    <Router>
      <div>
        <div className="navbarContainer">
          <img src={logo} alt="quizNasty-logo" width="200px" />
          <div className="userButtonArea">
            <Link to="/signup">
              <button className="signUpBtn yellowBtn">Sign Up</button>
            </Link>

            <Link to="/login">
              <button className="loginBtn blueBtn">Login</button>
            </Link>
          </div>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default navBar;
