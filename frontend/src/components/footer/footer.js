import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Footer = () => {
  return (
    <Route>
      <div className="footerLinks">
        <Link to="/about-us">About Us</Link>

        <Link to="/leaderboard">Leaderboard</Link>

        <Link to="user-profile">Your Profile</Link>
      </div>
    </Route>
  );
};
export default Footer;
