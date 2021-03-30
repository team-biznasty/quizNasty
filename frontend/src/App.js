import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignUp from "./components/signUp/SignUp";
import Quiz from "./components/quizPage/QuizPage";
import Navbar from "./components/navBar/Navbar";
import Login from "./components/logIn/logIn";
import Footer from "./components/footer/footer";
import Homepage from "./components/homePage/homePage";
import Leaderboard from "./components/leaderBoards/leaderBoards";
import Profile from "./components/profilePage/profilePage";
import About from "./components/about/aboutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <div className="contentArea">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/signup">
              <SignUpPage />
            </Route>
            <Route exact path="/quiz">
              <QuizPage />
            </Route>
            <Route exact path="/leaderboard">
              <LeaderboardPage />
            </Route>
            <Route exact path="/about-us">
              <AboutPage />
            </Route>
            <Route exact path="/user-profile">
              <ProfilePage />
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

function Home() {
  return <Homepage />;
}

function QuizPage() {
  return <Quiz />;
}

function SignUpPage() {
  return <SignUp />;
}

function LoginPage() {
  return <Login />;
}

function LeaderboardPage() {
  return <Leaderboard />;
}

function AboutPage() {
  return <About />;
}

function ProfilePage() {
  return <Profile />;
}
