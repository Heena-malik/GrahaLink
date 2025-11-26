import React from "react";
import "../Components/About.css";
import { FaStar, FaUsers, FaRegLightbulb, FaCheckCircle } from "react-icons/fa";
import aboutGif from "../assets/about.gif";

const About = () => {
  return (
    <div className="about-wrapper">

      {/* HEADER SECTION */}
      <div className="about-header">
        <h1><FaStar className="icon-glow" /> About GrahaLink</h1>
        <p>
          Welcome to <strong>GrahaLink</strong>, your trusted destination for 
          astrology guidance, horoscope insights, and cosmic wisdom.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="about-content">

        <div className="about-left">
          <h2><FaUsers /> Who We Are</h2>
          <p>
            At GrahaLink, we believe that the universe speaks to us in symbols, 
            energies, and patterns. Our mission is to help individuals understand 
            these cosmic messages and make informed decisions based on astrology.
          </p>

          <h2><FaRegLightbulb /> Our Vision</h2>
          <p>
            To empower people across the world by unlocking the hidden messages 
            of planets, stars, and celestial movements.
          </p>

          <h2><FaCheckCircle /> What We Offer</h2>
          <ul>
            <li>✔ Daily Horoscopes</li>
            <li>✔ Kundli / Birth Chart Reading</li>
            <li>✔ Compatibility Analysis</li>
            <li>✔ Career & Finance Guidance</li>
            <li>✔ Love & Relationship Insights</li>
            <li>✔ Personalized Remedies & Solutions</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-right">
          <img
            src={aboutGif}
            alt="Astrology Illustration"
            className="about-img"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
