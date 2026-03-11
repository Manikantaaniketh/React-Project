import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({});
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) {
      newErrors.name = "Full name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
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

    const userData = {
      name: form.name,
      email: form.email,
      password: form.password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    setSuccess("Signup completed successfully 🎉");

    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="signup-container">

      {success && <div className="popup">{success}</div>}

      <div className="signup-left">
        <div className="overlay">
          <h2>Find Your Perfect Rental</h2>
          <p>
            Join Lease Hub and discover the best rental properties with ease.
          </p>
        </div>
      </div>

      <div className="signup-right">
        <h1>Create Your Account</h1>
        <p className="sub-text">Join Lease Hub today</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <label>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}

          <button className="signup-btn">Sign Up</button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;