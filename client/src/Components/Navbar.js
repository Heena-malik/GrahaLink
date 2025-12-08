import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

import {
  FaStar,
  FaMoon,
  FaSun,
  FaHeart,
  FaCalendarAlt,
  FaBookOpen,
  FaChartPie,
  FaCompass,
  FaHome,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [muhuratOpen, setMuhuratOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* ------------------ NAVBAR ------------------ */}
      <nav className="navbar">
        <Link to="/" className="navbar-left">
          <img src={logo} alt="GrahaLink Logo" className="navbar-logo" />
          <div className="logo-text">GrahaLink</div>
        </Link>

        {/* Desktop Links */}
        <div className="navbar-links">
          <Link to="/Freekundli" className="nav-item">
            Free Kundali
          </Link>
          <Link to="/KundliCompatibility" className="nav-item">
            Kundli Compatibility
          </Link>

          {/* Calculator */}
          <div
            className="dropdown"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <div className="nav-item dropdown-toggle">Calculator ▾</div>
            <div className={`dropdown-menu ${menuOpen ? "show" : ""}`}>
              <Link to="/rashi" className="dropdown-item">
                <FaMoon className="menu-icon" /> Rashi Calculator
              </Link>
              <Link to="/nakshatra" className="dropdown-item">
                <FaStar className="menu-icon" /> Nakshatra Calculator
              </Link>
              <Link to="/gana" className="dropdown-item">
                <FaCompass className="menu-icon" /> Gana Calculator
              </Link>
            </div>
          </div>

          {/* Muhurat */}
          <div
            className="dropdown"
            onMouseEnter={() => setMuhuratOpen(true)}
            onMouseLeave={() => setMuhuratOpen(false)}
          >
            <div className="nav-item dropdown-toggle">Muhurat ▾</div>
            <div className={`dropdown-menu ${muhuratOpen ? "show" : ""}`}>
              <Link to="/vivah-muhurat" className="dropdown-item">
                <FaHeart className="menu-icon" /> Vivah Muhurat
              </Link>
              <Link to="/griha-pravesh" className="dropdown-item">
                <FaHome className="menu-icon" /> Griha Pravesh Muhurat
              </Link>
            </div>
          </div>

          {/* Calendar */}
          <div
            className="dropdown"
            onMouseEnter={() => setCalendarOpen(true)}
            onMouseLeave={() => setCalendarOpen(false)}
          >
            <div className="nav-item dropdown-toggle">Calendar ▾</div>
            <div className={`dropdown-menu ${calendarOpen ? "show" : ""}`}>
              <Link to="/hindu-calendar" className="dropdown-item">
                <FaCalendarAlt className="menu-icon" /> Hindu Calendar
              </Link>
              <Link to="/panchang" className="dropdown-item">
                <FaSun className="menu-icon" /> Daily Panchang
              </Link>
            </div>
          </div>

          {/* Software */}
          <div
            className="dropdown"
            onMouseEnter={() => setSoftwareOpen(true)}
            onMouseLeave={() => setSoftwareOpen(false)}
          >
            <div className="nav-item dropdown-toggle">Software ▾</div>
            <div className={`dropdown-menu ${softwareOpen ? "show" : ""}`}>
              <Link to="/kundli-software" className="dropdown-item">
                <FaChartPie className="menu-icon" /> Kundli Software
              </Link>
              <Link to="/vastu-software" className="dropdown-item">
                <FaHome className="menu-icon" /> Vastu Software
              </Link>
              <Link to="/panchang-software" className="dropdown-item">
                <FaBookOpen className="menu-icon" /> Panchang Software
              </Link>
            </div>
          </div>

          <Link to="/signin" className="nav-item nav-register">
            Sign In
          </Link>
        </div>

        {/* ---------------- HAMBURGER (Mobile) ---------------- */}
        <div className="hamburger" onClick={() => setDrawerOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* ------------------ DRAWER OVERLAY ------------------ */}
      <div
        className={`drawer-overlay ${drawerOpen ? "show" : ""}`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      {/* ------------------ DRAWER ------------------ */}
      <div className={`drawer ${drawerOpen ? "show" : ""}`}>
        <Link
          to="/"
          className="drawer-item"
          onClick={() => setDrawerOpen(false)}
        >
          <h1>GrahaLink</h1>
        </Link>

        <Link
          to="/Freekundli"
          className="drawer-item"
          onClick={() => setDrawerOpen(false)}
        >
          Free Kundali
        </Link>

        <Link
          to="/KundliCompatibility"
          className="drawer-item"
          onClick={() => setDrawerOpen(false)}
        >
          Kundli Compatibility
        </Link>

        {/* Calculator */}
        <div className="drawer-dropdown-title">Calculator</div>
        <div className="drawer-submenu">
          <Link to="/rashi" className="drawer-subitem">
            Rashi Calculator
          </Link>
          <Link to="/nakshatra" className="drawer-subitem">
            Nakshatra Calculator
          </Link>
          <Link to="/gana" className="drawer-subitem">
            Gana Calculator
          </Link>
        </div>

        {/* Muhurat */}
        <div className="drawer-dropdown-title">Muhurat</div>
        <div className="drawer-submenu">
          <Link to="/vivah-muhurat" className="drawer-subitem">
            Vivah Muhurat
          </Link>
          <Link to="/griha-pravesh" className="drawer-subitem">
            Griha Pravesh Muhurat
          </Link>
        </div>

        {/* Calendar */}
        <div className="drawer-dropdown-title">Calendar</div>
        <div className="drawer-submenu">
          <Link to="/hindu-calendar" className="drawer-subitem">
            Hindu Calendar
          </Link>
          <Link to="/panchang" className="drawer-subitem">
            Daily Panchang
          </Link>
        </div>

        {/* Software */}
        <div className="drawer-dropdown-title">Software</div>
        <div className="drawer-submenu">
          <Link to="/kundli-software" className="drawer-subitem">
            Kundli Software
          </Link>
          <Link to="/vastu-software" className="drawer-subitem">
            Vastu Software
          </Link>
          <Link to="/panchang-software" className="drawer-subitem">
            Panchang Software
          </Link>
        </div>

        <Link to="/signin" className="drawer-item">
          <h1>Sign In</h1>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
