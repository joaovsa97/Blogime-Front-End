import React from "react";
import { useState } from "react";
import axios from "axios"

const Register = (props) => {
  const { isEditing, changeRegister } = props;

  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev , [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.post("http://localhost:8800/api/auth/register", Inputs)
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div
      className="auth"
      style={{ display: isEditing === false ? "none" : "flex" }}
    >
      <h1>Register</h1>
      <div className="form">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="username" name="username" onChange={handleChange}/>
        <label htmlFor="email">E-mail</label>
        <input type="text" name="email" placeholder="E-mail" onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
        <label htmlFor="confpswrd">Confirm Password</label>
        <input
          type="password"
          name="confpswrd"
          placeholder="Confirm Password"
        />
        <button onClick={handleSubmit}>Register</button>
        <span onClick={() => changeRegister()}>Login</span>
      </div>
    </div>
  );
};

export default Register;
