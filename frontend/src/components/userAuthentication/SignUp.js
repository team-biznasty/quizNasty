import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");

    const getResponse = async (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/auth/signup", {
            name, email, password, passwordConf
        })
        .then((res) => {
            console.log(res);
            alert("Account created");
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConf("");
            sessionStorage.setItem("loggedIn", true);
            sessionStorage.setItem("email", res.data.email);
        });
    };

    const onChangeHandler = (e) => {
        if (e.target.id === "name") {
            setName(e.target.value);
        } else if (e.target.id === "email") {
            setEmail(e.target.value);
        } else if (e.target.id === "password") {
            setPassword(e.target.value);
        } else if (e.target.id  === "passwordConf") {
            setPasswordConf(e.target.value);
        }
    };

    return (
        <div className="userSignUp">
           <div>
               <div className="signupBG">
                   
                   </div>
                   <div className="SignupTxt">
                       <h1>Sign up to get some gnarly high-scores!</h1>
                   </div>
                   <form className="SignUpInput" onSubmit={getResponse}>
                       <h3>Name</h3>
                       <input className="nameIn" id="name" type="text" placeholder="Enter name..." onChange={onChangeHandler} value={name}></input>
                       <h3>Email</h3>
                       <input className="emailIn" id="email" type="text" placeholder="Enter email.." onChange={onChangeHandler} value={email}></input>
                       <h3>Password</h3>
                       <input className="passIn" id="password" type="password" placeholder="Enter password.." onChange={onChangeHandler} value={password}></input>
                       <h3>Verify Password</h3>
                    <input className="passConf" id="passwordConf" type="password" placeholder="Enter password.." onChange={onChangeHandler} value={passwordConf}></input>
                    <div>
                        <input className="submitButton" type="submit"></input>
                    </div>
                   </form>
                </div>
        </div>
    )
}

export default SignUp;