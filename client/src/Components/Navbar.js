import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';
import { 
  FaStar, FaMoon, FaSun, FaHeart, FaCalendarAlt, FaHome, 
  FaBookOpen, FaChartPie, FaCompass 
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [muhuratOpen, setMuhuratOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT – LOGO */}
<div className="navbar-left">
  <img src={logo} alt="GrahaLink Logo" className="navbar-logo" />
  <div className="logo-text">GrahaLink</div>
</div>


      {/* RIGHT – NAV LINKS */}
      <div className="navbar-links">

        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Freekundli" className="nav-item">Free Kundali</Link>
        <Link to="/kundli-matching" className="nav-item">Kundali Matching</Link>

        {/* -------- CALCULATOR DROPDOWN -------- */}
<div
  className="dropdown"
  onMouseEnter={() => setMenuOpen(true)}
  onMouseLeave={() => setMenuOpen(false)}
>
  <div className="nav-item dropdown-toggle">Calculator ▾</div>

  <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
    <Link to="/rashi" className="dropdown-item"><FaMoon className="menu-icon" /> Rashi Calculator</Link>
    <Link to="/nakshatra" className="dropdown-item"><FaStar className="menu-icon" /> Nakshatra Calculator</Link>
    <Link to="/gana" className="dropdown-item"><FaCompass className="menu-icon" /> Gana Calculator</Link>
  </div>
</div>


{/* -------- MUHURAT DROPDOWN -------- */}
<div
  className="dropdown"
  onMouseEnter={() => setMuhuratOpen(true)}
  onMouseLeave={() => setMuhuratOpen(false)}
>
  <div className="nav-item dropdown-toggle">Muhurat ▾</div>

  <div className={`dropdown-menu ${muhuratOpen ? "show" : ""}`}>
    <Link to="/vivah-muhurat" className="dropdown-item"><FaHeart className="menu-icon" /> Vivah Muhurat</Link>
    <Link to="/griha-pravesh" className="dropdown-item"><FaHome className="menu-icon" /> Griha Pravesh Muhurat</Link>
  </div>
</div>


{/* -------- CALENDAR DROPDOWN -------- */}
<div
  className="dropdown"
  onMouseEnter={() => setCalendarOpen(true)}
  onMouseLeave={() => setCalendarOpen(false)}
>
  <div className="nav-item dropdown-toggle">Calendar ▾</div>

  <div className={`dropdown-menu ${calendarOpen ? "show" : ""}`}>
    <Link to="/hindu-calendar" className="dropdown-item"><FaCalendarAlt className="menu-icon" /> Hindu Calendar</Link>
    <Link to="/panchang" className="dropdown-item"><FaSun className="menu-icon" /> Daily Panchang</Link>
  </div>
</div>


{/* -------- SOFTWARE DROPDOWN -------- */}
<div
  className="dropdown"
  onMouseEnter={() => setSoftwareOpen(true)}
  onMouseLeave={() => setSoftwareOpen(false)}
>
  <div className="nav-item dropdown-toggle">Software ▾</div>

  <div className={`dropdown-menu ${softwareOpen ? "show" : ""}`}>
    <Link to="/kundli-software" className="dropdown-item"><FaChartPie className="menu-icon" /> Kundli Software</Link>
    <Link to="/vastu-software" className="dropdown-item"><FaHome className="menu-icon" /> Vastu Software</Link>
    <Link to="/panchang-software" className="dropdown-item"><FaBookOpen className="menu-icon" /> Panchang Software</Link>
  </div>
</div>

        {/* ---- ONLY SIGN IN BUTTON ---- */}
        <Link to="/signin" className="nav-item nav-register">Sign In</Link>

      </div>
    </nav>
  );
};

export default Navbar;
