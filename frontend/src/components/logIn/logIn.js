import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const loginAttempt = (event) => {
    event.preventDefault();
    axios.post("/login", {
        method: 'post',
        url: '/login',
        data: {
          email: email,
          password: password,
        }
      });
      //if matches an account set the sites state to logged in
      
      // if incorrect return an error to the page
}

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
            className="emailLogIn"
            placeholder="Account email address"
            />
            <br/>
            <input
            id="password"
            onChange={handleSubmit}
            type="text"
            className="passwordLogIn"
            placeholder="Account password"
            />
            <br />
            <button className="logInButton" type="submit">
                Submit
            </button>
            </form>
        </div>
    );
};

export default Login;