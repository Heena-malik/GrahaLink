import React, { useState } from "react";
import "../Components/SignIn.css";
import { FaEnvelope, FaLock, FaStar } from "react-icons/fa";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

   try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);

      window.location.href = "/";
    } catch (err) {
      setError(err.response?.data?.msg || "Something went wrong. Try again!");
    }

    setLoading(false);
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-box">

        <h2 className="signin-title">
          <FaStar className="star-icon" /> Sign In
        </h2>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
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
