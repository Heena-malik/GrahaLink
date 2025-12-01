// import React, { useState } from "react";
// import "../Components/Register.css";
// import { FaUser, FaEnvelope, FaLock, FaStar } from "react-icons/fa";
// import axios from "axios";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         name,
//         email,
//         password,
//       });

//       setSuccess(res.data.msg);
      
//       // Redirect to sign in page after a delay
//       setTimeout(() => {
//         window.location.href = "/signin";
//       }, 1500);

//     } catch (err) {
//       setError(err.response?.data?.msg || "Something went wrong!");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="register-wrapper">
//       <div className="register-box">

//         <h2 className="register-title">
//           <FaStar className="star-icon" /> Create Account
//         </h2>

//         {error && <p className="error-msg">{error}</p>}
//         {success && <p className="success-msg">{success}</p>}

//         <form onSubmit={handleSubmit}>

//           {/* Name */}
//           <div className="input-group">
//             <FaUser className="input-icon" />
//             <input
//               type="text"
//               placeholder="Enter your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="input-group">
//             <FaEnvelope className="input-icon" />
//             <input
//               type="email"
//               placeholder="Enter your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="input-group">
//             <FaLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Create a Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {/* Register Button */}
//           <button type="submit" className="register-btn" disabled={loading}>
//             {loading ? "Registering..." : "Register"}
//           </button>

//           <p className="signin-text">
//             Already have an account? <a href="/signin">Sign In</a>
//           </p>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;
