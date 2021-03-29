import logo from "../../assets/logo.png"

const Navbar = () => { 
    return (
        <div className="navbarContainer">
            <img src={logo} alt="quizNasty-logo" width="200px"/>
            <div className="userButtonArea">
                <button className="signUpBtn yellowBtn">Sign Up</button>
                <button className="loginBtn blueBtn">Login</button>
            </div>
        </div>
    )
}

export default Navbar;