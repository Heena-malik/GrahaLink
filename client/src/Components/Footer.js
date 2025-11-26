import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* LEFT SECTION */}
        <div className="footer-section">
          <h2>GrahaLink</h2>
          <p>Your trusted partner for astrology, predictions, and horoscope guidance.</p>
        </div>

        {/* MIDDLE - QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Daily Horoscope</li>
            <li>Compatibility</li>
            <li>Birth Chart</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaEnvelope /> astroguide@gmail.com</p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AstroGuide. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
