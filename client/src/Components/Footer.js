import React from "react";
import "../Components/Footer.css";
// FaSearch is removed as the search bar is removed
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import facebookImg from "../assets/Facebook.webp";
import instagramImg from "../assets/instagram.avif";
import twitterImg from "../assets/twitter.png";
import linkedinImg from "../assets/linkedin.png";
import youtubeImg from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* LEFT SECTION */}
        <div className="footer-section">
          <h2>GrahaLink</h2>
          <p>
            Your trusted partner for astrology, predictions, and horoscope
            guidance.
          </p>
          {/* ADDRESS BOX */}
          <div className="address-box">
            <p>
              <FaMapMarkerAlt /> 221B Astro Street, Galaxy Nagar, Mumbai, India
            </p>
            <p>
              <FaPhoneAlt /> +91 9876543210
            </p>
            <p>
              <FaEnvelope /> GrahaLink@gmail.com
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
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

        {/* SOCIAL SECTION */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">
            {/* FACEBOOK - REMEMBER TO REPLACE "GrahaLink" with your actual profile handle */}
            <a
              href="https://www.facebook.com/GrahaLink"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-link"
            >
              <button className="social-btn">
                <img src={facebookImg} alt="Facebook" className="social-img" />
              </button>
            </a>

            {/* INSTAGRAM - REMEMBER TO REPLACE "GrahaLink" with your actual profile handle */}
            <a
              href="https://www.instagram.com/GrahaLink"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-link"
            >
              <button className="social-btn">
                <img
                  src={instagramImg}
                  alt="Instagram"
                  className="social-img"
                />
              </button>
            </a>

            {/* TWITTER (X) - REMEMBER TO REPLACE "GrahaLink" with your actual profile handle */}
            <a
              href="https://twitter.com/GrahaLink"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-link"
            >
              <button className="social-btn">
                <img src={twitterImg} alt="Twitter" className="social-img" />
              </button>
            </a>

            {/* LINKEDIN - REMEMBER TO REPLACE "GrahaLink" with your actual company/profile handle */}
            <a
              href="https://www.linkedin.com/company/GrahaLink"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-link"
            >
              <button className="social-btn">
                <img src={linkedinImg} alt="LinkedIn" className="social-img" />
              </button>
            </a>

            {/* YOUTUBE - REMEMBER TO REPLACE "GrahaLink" with your actual channel ID/handle */}
            <a
              href="https://www.youtube.com/c/GrahaLink"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn-link"
            >
              <button className="social-btn">
                <img src={youtubeImg} alt="YouTube" className="social-img" />
              </button>
            </a>
          </div>
          {/* SEARCH BAR REMOVED */}
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GrahaLink. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
