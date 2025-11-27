import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LEFT — LOGO */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="logo">GrahaLink</div>
      </div>

      {/* MIDDLE — SEARCH BAR */}
      <div className="navbar-search">
        <input type="text" placeholder="Search services..." />
        <button>Search</button>
      </div>

      {/* RIGHT — NAV LINKS */}
      <div className="navbar-links">
        <Link to="/" className="nav-item">Home</Link>

        {/* DROPDOWN MENU */}
        <div
          className="dropdown"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
        >
          <div className="nav-item dropdown-toggle">Services ▾</div>

          {menuOpen && (
            <div className="dropdown-menu">

              {/* Kundli Link Added */}
              <Link to="/kundli-compatibility" className="dropdown-item">
                💑 Kundli Compatibility
              </Link>

              <Link to="/electrician" className="dropdown-item">🕉️ 8. Gemstone Recommendation</Link>
              <Link to="/plumber" className="dropdown-item">🔮 1. Daily Horoscope Readings</Link>
              <Link to="/carpenter" className="dropdown-item">🪬 3. Kundali / Birth Chart Analysis</Link>
              <Link to="/technician" className="dropdown-item">🧿 4. Vastu Consultation</Link>
            </div>
          )}
        </div>

        {/* REPLACED About → Kundli */}
        <Link to="/kundli-compatibility" className="nav-item">Kundli Compatibility</Link>

        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/signin" className="nav-item">Sign In</Link>
        <Link to="/register" className="nav-item nav-register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
