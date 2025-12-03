import React from "react";
import "./AstroProfile.css";
import imgAnanya from "../assets/astrologers/ananya.jpg";

const Ananya = () => {
  return (
    <div className="astro-container">
      <div className="astro-header">

        <div className="astro-left-card">
          <div className="online-dot"></div>
          <img src={imgAnanya} alt="Astro Ananya" className="astro-img" />
          <button className="gift-btn">Gift 🎁</button>
        </div>

        <div className="astro-details">
          <h1>Astro Ananya</h1>

          <p><strong>Expertise:</strong> Tarot, Vedic</p>
          <p><strong>Experience:</strong> 8+ Years</p>
          <p><strong>Language:</strong> English, Hindi</p>

          <div className="astro-box-row">
            <div className="astro-box">
              <h4>Consultation Charges:</h4>
              <p className="price">₹11/min</p>
            </div>

            <div className="astro-box">
              <h4>User Rating:</h4>
              <p className="stars">⭐⭐⭐⭐⭐ (4.9)</p>
            </div>

            <div className="astro-box">
              <button className="follow-btn">Follow</button>
              <p className="followers">89,334 Followers</p>
            </div>
          </div>

          <button className="chat-btn">💬 Chat</button>
        </div>
      </div>

      <div className="about-section">
        <h2>About Astro Ananya</h2>
        <p>
          Astro Ananya combines Tarot and Astrology to provide in-depth intuitive 
          guidance. She is popular among youth for accurate life predictions.
        </p>
      </div>

      <div className="systems-box">
        <h3>Systems Known:</h3>
        <p>Tarot, Vedic Astrology</p>
      </div>
    </div>
  );
};

export default Ananya;
