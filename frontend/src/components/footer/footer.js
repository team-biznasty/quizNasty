import logo from "../../assets/logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AboutUs from "../about/aboutPage";
import ProfilePage from "../profilePage/profilePage";
import Leaderboard from "../leaderBoards/leaderBoards";

const Footer = () => {
  return (
    <Router>
      <div className="footerLinks">
        <Link to="/about-us">About Us</Link>

        <Link to="/leaderboard">Leaderboard</Link>

        <Link to="/your-profile">Your Profile</Link>
      </div>

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/your-profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
};
export default Footer;
