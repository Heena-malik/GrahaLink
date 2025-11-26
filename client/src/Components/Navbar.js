import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [muhuratOpen, setMuhuratOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT – LOGO */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="logo-text">GrahaLink</div>
      </div>

      {/* RIGHT – NAV LINKS */}
      <div className="navbar-links">

        <Link to="/" className="nav-item">Home</Link>
        <Link to="/Contact" className="nav-item">Free Kundali</Link>
        <Link to="/kundli-matching" className="nav-item">Kundali Matching</Link>

        {/* -------- CALCULATOR DROPDOWN -------- */}
        <div
          className="dropdown"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className="nav-item dropdown-toggle">Calculator ▾</div>

          <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
            <Link to="/rashi" className="dropdown-item">➜ Rashi Calculator</Link>
            <Link to="/nakshatra" className="dropdown-item">➜ Nakshatra Calculator</Link>
            <Link to="/gana" className="dropdown-item">➜ Gana Calculator</Link>
            <Link to="/dasha" className="dropdown-item">➜ Dasha Calculator</Link>
            <Link to="/mangal-dasha" className="dropdown-item">➜ Mangal Dasha Calculator</Link>
            <Link to="/sade-sati" className="dropdown-item">➜ Sade Sati Calculator</Link>
            <Link to="/navamsa" className="dropdown-item">➜ Navamsa Calculator</Link>
            <Link to="/kaal-sarp" className="dropdown-item">➜ Kaal Sarp Dosh Calculator</Link>
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
            <Link to="/vivah-muhurat" className="dropdown-item">➜ Vivah Muhurat</Link>
            <Link to="/griha-pravesh" className="dropdown-item">➜ Griha Pravesh Muhurat</Link>
            <Link to="/namkaran" className="dropdown-item">➜ Namkaran Muhurat</Link>
            <Link to="/mundan" className="dropdown-item">➜ Mundan Muhurat</Link>
            <Link to="/car-purchase" className="dropdown-item">➜ Vehicle Purchase Muhurat</Link>
            <Link to="/business-muhurat" className="dropdown-item">➜ Business / Shop Muhurat</Link>
            <Link to="/bhumi-poojan" className="dropdown-item">➜ Bhumi Poojan Muhurat</Link>
          </div>
        </div>

        {/* -------- NEW CALENDAR DROPDOWN -------- */}
        <div
          className="dropdown"
          onMouseEnter={() => setCalendarOpen(true)}
          onMouseLeave={() => setCalendarOpen(false)}
        >
          <div className="nav-item dropdown-toggle">Calendar ▾</div>

          <div className={`dropdown-menu ${calendarOpen ? "show" : ""}`}>
            <Link to="/hindu-calendar" className="dropdown-item">➜ Hindu Calendar</Link>
            <Link to="/panchang" className="dropdown-item">➜ Daily Panchang</Link>
            <Link to="/festival-calendar" className="dropdown-item">➜ Festival Calendar</Link>
            <Link to="/vrat-calendar" className="dropdown-item">➜ Vrat & Upvas Calendar</Link>
            <Link to="/planet-calendar" className="dropdown-item">➜ Planet Transit Calendar</Link>
          </div>
        </div>

        {/* -------- NEW SOFTWARE DROPDOWN -------- */}
        <div
          className="dropdown"
          onMouseEnter={() => setSoftwareOpen(true)}
          onMouseLeave={() => setSoftwareOpen(false)}
        >
          <div className="nav-item dropdown-toggle">Software ▾</div>

          <div className={`dropdown-menu ${softwareOpen ? "show" : ""}`}>
            <Link to="/kundli-software" className="dropdown-item">➜ Kundli Software</Link>
            <Link to="/vastu-software" className="dropdown-item">➜ Vastu Software</Link>
            <Link to="/panchang-software" className="dropdown-item">➜ Panchang Software</Link>
            <Link to="/prediction-software" className="dropdown-item">➜ Prediction Software</Link>
            <Link to="/matchmaking-software" className="dropdown-item">➜ Matchmaking Software</Link>
          </div>
        </div>

        <Link to="/signin" className="nav-item">Sign In</Link>
        <Link to="/register" className="nav-item nav-register">Register</Link>

      </div>

    </nav>
  );
};

export default Navbar;
