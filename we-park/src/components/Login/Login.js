import React from "react";
import logo from "../../assets/logo_tp.png";
import "./Login.css";
const Login = (props) => {
  return (
    <div className="container">
      <img src={logo} className="logoIcon" />
      <form className="form">
        <div className="inputsBox">
          <input type="text" placeholder="User Name" className="input" />
          <input type="password" placeholder="Password" className="input" />
        </div>

        <button className="button">Login</button>

        <div className="textButtonsBox">
          <button className="textButton">Register</button>
          <button className="textButton">Forget Password</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
