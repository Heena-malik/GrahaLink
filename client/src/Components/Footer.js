import React from "react";
import "../Components/Footer.css";
import { FaSearch } from "react-icons/fa";

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
            <button className="social-btn">
              <img src={facebookImg} alt="Facebook" className="social-img" />
            </button>

            <button className="social-btn">
              <img src={instagramImg} alt="Instagram" className="social-img" />
            </button>

            <button className="social-btn">
              <img src={twitterImg} alt="Twitter" className="social-img" />
            </button>

            <button className="social-btn">
              <img src={linkedinImg} alt="LinkedIn" className="social-img" />
            </button>

            <button className="social-btn">
              <img src={youtubeImg} alt="YouTube" className="social-img" />
            </button>
          </div>

          {/* COMMENT SEARCH BAR */}
          <div className="comment-search">
  <input type="text" placeholder="Search comments..." />
  <button className="search-btn">
    <FaSearch />
  </button>
</div>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GrahaLink. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
