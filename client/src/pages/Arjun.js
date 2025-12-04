import React from "react";
import "../Components/AstroProfile.css";
import imgArjun from "../assets/astrologers/img1.png";

const Arjun = () => {
  return (
    <div className="astro-container">

      {/* TOP SECTION */}
      <div className="astro-header">

        {/* LEFT: IMAGE CARD */}
        <div className="astro-left-card">
          <div className="online-dot"></div>
          <img src={imgArjun} alt="Arjun Pandit" className="astro-img" />

          <button className="gift-btn">Gift 🎁</button>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="astro-details">
          <h1>Arjun Pandit</h1>

          <p><strong>Expertise:</strong> Vedic</p>
          <p><strong>Experience:</strong> 16+ Years</p>
          <p><strong>Language:</strong> English, Hindi</p>

          <div className="astro-box-row">

            {/* Consultation Charges */}
            <div className="astro-box">
              <h4>Consultation Charges:</h4>
              <p className="price">₹11/min <span className="cut">₹30/min</span></p>
              <span className="offer-tag">OFFER</span>
            </div>

            {/* Rating */}
            <div className="astro-box">
              <h4>User Rating:</h4>
              <p className="stars">⭐⭐⭐⭐⭐ (4.7)</p>
            </div>

            {/* Followers */}
            <div className="astro-box">
              <button className="follow-btn">Follow</button>
              <p className="followers">112,927 Followers</p>
            </div>

          </div>

          <button className="chat-btn">💬 Chat</button>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about-section">
        <h2>About Arjun Pandit</h2>
        <p>
          Arjun Pandit, a young and gifted Vedic astrologer, has cultivated years of 
          experience, making him a rising star in this field. His accurate and personalized 
          readings have not only offered guidance but also helped clients understand 
          themselves and their life's purpose with clarity.
        </p>
        <button className="read-more">Read More</button>
      </div>

      {/* SYSTEMS */}
      <div className="systems-box">
        <h3>Systems Known:</h3>
      </div>

    </div>
  );
};

export default Arjun;
