import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!remember) {
      newErrors.remember = "You didn't tick Remember Me";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setErrors({ email: "No account found. Please signup first." });
      return;
    }

    if (
      storedUser.email !== email ||
      storedUser.password !== password
    ) {
      setErrors({ password: "Invalid email or password ❌" });
      return;
    }

    setErrors({});
    alert("Login Successful ✅");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="overlay">
          <h2>Manage Properties Efficiently</h2>
          <p>
            Easily track rent payments, maintenance requests, and tenant
            communications in one place.
          </p>
        </div>
      </div>

      <div className="login-right">
        <h1>Welcome Back to Lease Hub!</h1>
        <p className="sub-text">Sign in your account</p>

        <form onSubmit={handleSubmit}>
          <label>Your Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <span className="error">{errors.password}</span>
          )}

          <div className="login-options">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me
            </label>
          </div>

          {errors.remember && (
            <span className="error">{errors.remember}</span>
          )}

          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;