import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const getResponse = async (e) => {
    e.preventDefault();

    try {
      const data = { name, email, password, passwordCheck };
      console.log(data);
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        data
      );
      const jsondata = await response.data;
      console.log(jsondata);
      alert("Account created");
      setName("");
      setEmail("");
      setPassword("");
      setPasswordCheck("");
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("email", jsondata.email);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeHandler = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "passwordConf") {
      setPasswordCheck(e.target.value);
    }
  };

  return (
    <div className="userSignUp">
      <div>
        <div className="signupBG"></div>
        <div className="SignupTxt">
          <h1>Sign up to get some gnarly high-scores!</h1>
        </div>
        <form className="SignUpInput" onSubmit={getResponse}>
          <h3>Name</h3>
          <input
            className="nameIn placeholder signUpPlaceholder"
            id="name"
            type="text"
            placeholder="Enter name..."
            onChange={onChangeHandler}
            value={name}
          ></input>
          <h3>Email</h3>
          <input
            className="emailIn placeholder signUpPlaceholder"
            id="email"
            type="text"
            placeholder="Enter email.."
            onChange={onChangeHandler}
            value={email}
          ></input>
          <h3>Password</h3>
          <input
            className="passIn placeholder signUpPlaceholder"
            id="password"
            type="password"
            placeholder="Enter password.."
            onChange={onChangeHandler}
            value={password}
          ></input>
          <h3>Verify Password</h3>
          <input
            className="passConf placeholder signUpPlaceholder"
            id="passwordConf"
            type="password"
            placeholder="Enter password.."
            onChange={onChangeHandler}
            value={passwordCheck}
          ></input>
          <div>
            <input className="submitButton blueBtn" type="submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

// const data = new URLSearchParams({
//   name,
//   email,
//   password,
//   passwordCheck,
// });
// const response = await fetch("http://localhost:5000/auth/signup", {
//   method: "POST",
//   mode: "cors",
//   body: data,
// });
// const resdata = await response.json();
// console.log(resdata);
