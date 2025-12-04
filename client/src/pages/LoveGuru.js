import React from "react";
import "../Components/AstroProfile.css";
import imgLoveGuru from "../assets/astrologers/img3.png";

const LoveGuru = () => {
  return (
    <div className="astro-container">
      <div className="astro-header">

        <div className="astro-left-card">
          <div className="online-dot"></div>
          <img src={imgLoveGuru} alt="Love Guru" className="astro-img" />
          <button className="gift-btn">Gift 🎁</button>
        </div>

        <div className="astro-details">
          <h1>Love Guru</h1>

          <p><strong>Expertise:</strong> Love & Relationship</p>
          <p><strong>Experience:</strong> 10+ Years</p>
          <p><strong>Language:</strong> Hindi</p>

          <div className="astro-box-row">
            <div className="astro-box">
              <h4>Consultation Charges:</h4>
              <p className="price">₹21/min</p>
            </div>

            <div className="astro-box">
              <h4>User Rating:</h4>
              <p className="stars">⭐⭐⭐⭐⭐ (4.8)</p>
            </div>

            <div className="astro-box">
              <button className="follow-btn">Follow</button>
              <p className="followers">150,121 Followers</p>
            </div>
          </div>

          <button className="chat-btn">💬 Chat</button>
        </div>
      </div>

      <div className="about-section">
        <h2>About Love Guru</h2>
        <p>
          Love Guru specializes in solving complex love, relationship, and 
          marriage issues. His guidance has helped thousands restore peace 
          in their personal lives.
        </p>
      </div>

      <div className="systems-box">
        <h3>Systems Known:</h3>
        <p>Love Astrology, Marriage Compatibility</p>
      </div>
    </div>
  );
};

export default LoveGuru;
