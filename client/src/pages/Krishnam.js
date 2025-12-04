import React from "react";
import "../Components/AstroProfile.css";
import imgKrishnam from "../assets/astrologers/img2.jpeg";

const Krishnam = () => {
  return (
    <div className="astro-container">
      <div className="astro-header">

        <div className="astro-left-card">
          <div className="online-dot"></div>
          <img src={imgKrishnam} alt="Mr. Krishnam" className="astro-img" />
          <button className="gift-btn">Gift 🎁</button>
        </div>

        <div className="astro-details">
          <h1>Mr. Krishnam</h1>

          <p><strong>Expertise:</strong> Vedic, Numerology</p>
          <p><strong>Experience:</strong> 12+ Years</p>
          <p><strong>Language:</strong> Hindi, English</p>

          <div className="astro-box-row">
            <div className="astro-box">
              <h4>Consultation Charges:</h4>
              <p className="price">₹16/min</p>
            </div>

            <div className="astro-box">
              <h4>User Rating:</h4>
              <p className="stars">⭐⭐⭐⭐ (4.5)</p>
            </div>

            <div className="astro-box">
              <button className="follow-btn">Follow</button>
              <p className="followers">98,231 Followers</p>
            </div>
          </div>

          <button className="chat-btn">💬 Chat</button>
        </div>
      </div>

      <div className="about-section">
        <h2>About Mr. Krishnam</h2>
        <p>
          Mr. Krishnam has guided thousands of people with his deep knowledge 
          in Vedic Astrology and Numerology. His predictions are widely 
          appreciated for accuracy and clarity.
        </p>
      </div>

      <div className="systems-box">
        <h3>Systems Known:</h3>
        <p>Vedic Astrology, Numerology</p>
      </div>
    </div>
  );
};

export default Krishnam;
