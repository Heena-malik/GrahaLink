import React from "react";
import "./AstroProfile.css";
import imgSwami from "../assets/astrologers/swami.jpg";

const Swami = () => {
  return (
    <div className="astro-container">
      <div className="astro-header">

        <div className="astro-left-card">
          <div className="online-dot"></div>
          <img src={imgSwami} alt="Swami Ji" className="astro-img" />
          <button className="gift-btn">Gift 🎁</button>
        </div>

        <div className="astro-details">
          <h1>Swami Ji</h1>

          <p><strong>Expertise:</strong> Vedic, Kundli Analysis</p>
          <p><strong>Experience:</strong> 20+ Years</p>
          <p><strong>Language:</strong> Hindi, Sanskrit</p>

          <div className="astro-box-row">
            <div className="astro-box">
              <h4>Consultation Charges:</h4>
              <p className="price">₹17/min</p>
            </div>

            <div className="astro-box">
              <h4>User Rating:</h4>
              <p className="stars">⭐⭐⭐⭐ (4.4)</p>
            </div>

            <div className="astro-box">
              <button className="follow-btn">Follow</button>
              <p className="followers">72,500 Followers</p>
            </div>
          </div>

          <button className="chat-btn">💬 Chat</button>
        </div>
      </div>

      <div className="about-section">
        <h2>About Swami Ji</h2>
        <p>
          Swami Ji is known for his spiritual guidance and mastery in 
          Kundli interpretations. His consultations bring clarity and peace.
        </p>
      </div>

      <div className="systems-box">
        <h3>Systems Known:</h3>
        <p>Kundli Reading, Vedic Astrology</p>
      </div>
    </div>
  );
};

export default Swami;
