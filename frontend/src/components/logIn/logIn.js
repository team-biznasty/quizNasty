import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAttempt = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
          email,
          password,
      });
      const data = await response.data;
      console.log(response);
      console.log(data);
      if (response.status === 200) {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("email", data.username);
        sessionStorage.setItem("name", data.name);
        history.push("/");
        console.log("main")
      } else {
        history.push("/signup");
        console.log("signup")
      }
    } catch (error) {
      console.log(error);
    }
  };
  //if matches an account set the sites state to logged in

  // if incorrect return an error to the page

  const handleSubmit = (event) => {
    if (event.target.id === "email") {
      setEmail(event.target.value);
    } else if (event.target.id === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <div className="logInSection">
      <form className="logInForm" onSubmit={loginAttempt}>
        <input
          id="email"
          onChange={handleSubmit}
          type="text"
          className="emailLogIn placeholder loginPlaceholder"
          placeholder="Account email address"
        />
       
        <input
          id="password"
          onChange={handleSubmit}
          type="password"
          className="passwordLogIn placeholder loginPlaceholder"
          placeholder="Account password"
        />
      
        <button className="logInButton yellowBtn" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
