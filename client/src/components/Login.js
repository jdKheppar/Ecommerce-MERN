import { useState, useEffect } from "react";
//always import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const handleLogin = async () => {
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

    if (result.name) {
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Login failed");
    }
  };
  const l = () => alert("hello");
  return (
    <div className="login">
      {l}
      <h1>Login</h1>
      <input
        className="input-field"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        className="input-field"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="submit-btn" onClick={handleLogin} type="button">
        Submit
      </button>
    </div>
  );
};

export default Login;
