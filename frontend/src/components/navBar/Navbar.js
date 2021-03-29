import logo from "../../assets/logo.png";
import SignUp from "../signUp/SignUp";
import Login from "../logIn/logIn";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
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

export default Navbar;
