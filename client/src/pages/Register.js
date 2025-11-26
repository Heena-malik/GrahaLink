import React, { useState } from "react";
import "../Components/Register.css";
import { FaUser, FaEnvelope, FaLock, FaStar } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">

        <h2 className="register-title">
          <FaStar className="star-icon" /> Create Account
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Create a Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Register Button */}
          <button type="submit" className="register-btn">
            Register
          </button>

          <p className="signin-text">
            Already have an account? <a href="/signin">Sign In</a>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;
