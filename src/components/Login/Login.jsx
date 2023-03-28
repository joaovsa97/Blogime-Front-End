import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { isEditing, changeLogin } = props;
  return (
    <div
      className="auth"
      style={{ display: isEditing === false ? "flex" : "none" }}
    >
      <h1>Login</h1>
      <div className="form">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" id="username" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="pswrd"
          placeholder="password"
        />
        <button>Login</button>
        <span onClick={() => changeLogin()}>register</span>
      </div>
    </div>
  );
};

export default Login;
