import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.js";

// import { api } from "../../services/api.js";

const Login = (props) => {
  const { isEditing, changeLogin } = props;
  const [Inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const [err, setErr] = useState(null);

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(Inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div
      className="auth"
      style={{ display: isEditing === false ? "flex" : "none" }}
    >
      <h1>Login</h1>
      <div className="form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="pswrd"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p className="errMsg">{err}</p>}
        <span onClick={() => changeLogin()}>Register</span>
      </div>
    </div>
  );
};

export default Login;
