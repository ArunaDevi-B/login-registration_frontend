import React, { useState } from "react";
import "../../Css/Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const loginres = await fetch("https://login-guvi-backend.onrender.com/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ emailId: email, password: password }),
    });
    console.log(loginres);
    if (loginres.status === 200) {
        alert('login success');
    }
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email..."
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="password"
          name="password"
          placeholder="***********"
          required
        />
        <button type="submit">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
};

export default Login;
