import React, { useState } from "react";
import "../Components/SignIn.css";
import { FaEnvelope, FaLock, FaStar } from "react-icons/fa";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed in!");
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-box">

        <h2 className="signin-title">
          <FaStar className="star-icon" /> Sign In
        </h2>

        <form onSubmit={handleSubmit}>

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
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <p className="signup-text">
            Don't have an account? <a href="/register">Register</a>
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignIn;
