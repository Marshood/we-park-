import React, { useState } from "react";
import logo from "../../assets/logo_tp.png";
import { useHistory } from "react-router-dom";
import "./Login.css";
const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let history = useHistory();

  const handleInputChange = (e) => {
    const name = e.target.name;
    setUser({ ...user, [name]: e.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //call the server (post method)
  };

  return (
    <div className="container">
      <img src={logo} className="logoIcon" />
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputsBox">
          <input
            type="text"
            placeholder="User Name"
            name="username"
            className="input"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            onChange={handleInputChange}
          />
        </div>

        <button className="button" onClick={() => history.push("/home")}>
          Login
        </button>

        <div className="textButtonsBox">
          <button
            className="textButton"
            onClick={() => history.push("/register")}
          >
            Register
          </button>
          <button className="textButton">Forget Password</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
