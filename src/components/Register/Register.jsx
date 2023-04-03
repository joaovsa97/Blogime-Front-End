import React from "react";
import { useState } from "react";

const Register = (props) => {
  const { isEditing, changeRegister } = props;

  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <div
      className="auth"
      style={{ display: isEditing === false ? "none" : "flex" }}
    >
      <h1>Register</h1>
      <div className="form">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" name="username" />
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" placeholder="E-mail" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="confpswrd">Confirm Password</label>
        <input
          type="password"
          name="confpswrd"
          placeholder="Confirm Password"
        />
        <button>Register</button>
        <span onClick={() => changeRegister()}>Login</span>
      </div>
    </div>
  );
};

export default Register;
