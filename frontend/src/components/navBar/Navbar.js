import logo from "../../assets/logo.png";
import {Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Route>
      <div>
        <div className="navbarContainer">
        <Link to="/">
          <img src={logo} alt="quizNasty-logo" width="200px" />
          </Link>
          <div className="userButtonArea">
            <Link to="/signup">
              <button className="signUpBtn yellowBtn">Sign Up</button>
            </Link>

            <Link to="/login">
              <button className="loginBtn blueBtn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </Route>
  );
};

export default Navbar;
