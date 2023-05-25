import React, { useState } from "react";

import { api } from "../../services/api.js";

const Register = (props) => {
  const { isEditing, changeRegister } = props;

  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confpswrd: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Inputs.password === Inputs.confpswrd) {
      try {
        await api.post("/auth/register", Inputs).then(() => 
        changeRegister(),
        setInputs({
          username: "",
          email: "",
          password: "",
          confpswrd: ""
      }))
      } catch (err) {
        setErr(err.response.data);
      }
    } else {
      setErr("Password Does Not Match");
    }

  };

  return (
    <div
      className="auth"
      style={{ display: isEditing === false ? "none" : "flex" }}
    >
      <h1>Register</h1>
      <div className="form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={Inputs.username}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={Inputs.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={Inputs.password}
        />
        <label htmlFor="confpswrd">Confirm Password</label>
        <input
          type="password"
          name="confpswrd"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={Inputs.confpswrd}
        />
        <button onClick={handleSubmit}>Register</button>
        {err && <p className="errMsg">{err}</p>}
        <span onClick={() => changeRegister()}>Login</span>
      </div>
    </div>
  );
};

export default Register;
