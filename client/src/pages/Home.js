import React, { useState, useRef, useEffect } from 'react';
import '../Components/Home.css';

import homeGif from '../assets/home.gif';

// Import feature icons
import icon1 from '../assets/free-kundli.jpg';
import icon2 from '../assets/kundli-match.png';
import icon3 from '../assets/jyotish-tool.png';
import icon4 from '../assets/live-transit.jpg';
import icon5 from '../assets/panchang.jpg';
import icon6 from '../assets/muhurat.png';
import icon7 from '../assets/calender.jpg';
import icon8 from '../assets/learn-astrology.avif';

/* ---------------------------------------------------
   FIXED ACCORDION — AUTO HEIGHT LIKE NETFLIX
--------------------------------------------------- */
const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [open]);

  return (
    <div className={`accordion-item ${open ? 'open' : ''}`}>
      <button className="accordion-header" onClick={() => setOpen(!open)}>
        {title}
        <span className={`arrow ${open ? 'rotate' : ''}`}>▼</span>
      </button>

      <div ref={contentRef} className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
};


const Home = () => {
  return (
    <div className="home-wrapper">

      {/* ---------- TOP SECTION ---------- */}
      <div className="home-container">

        <div className="home-left">
          <h1 className="home-quote">
            "Astrology is the study of the connection between celestial activity 
            and earthly events. Those who practice astrology are called astrologers."
          </h1>

          <button className="get-started-btn">Get Started</button>
        </div>

        <div
          className="home-right"
          style={{ backgroundImage: `url(${homeGif})` }}
        ></div>

      </div>

      {/* ---------- FEATURE CARDS SECTION ---------- */}
      <div className="feature-grid">

        <div className="feature-card">
          <img src={icon1} alt="Free Kundli" />
          <p>Free Kundli</p>
        </div>

        <div className="feature-card">
          <img src={icon2} alt="Kundli Match" />
          <p>Kundli Match</p>
        </div>

        <div className="feature-card">
          <img src={icon3} alt="Jyotish Tool" />
          <p>Jyotish Tool</p>
        </div>

        <div className="feature-card">
          <img src={icon4} alt="Live Transit" />
          <p>Live Transit</p>
        </div>

        <div className="feature-card">
          <img src={icon5} alt="Panchang" />
          <p>Panchang</p>
        </div>

        <div className="feature-card">
          <img src={icon6} alt="Muhurat" />
          <p>Muhurat</p>
        </div>

        <div className="feature-card">
          <img src={icon7} alt="Calendar" />
          <p>Calendar</p>
        </div>

        <div className="feature-card">
          <img src={icon8} alt="Learn Astrology" />
          <p>Learn Astrology</p>
        </div>

      </div>

      {/* ---------- CONTENT SECTION ---------- */}
      <div className="content-wrapper">
        <div className="content-section">
          <h2 className="section-title">Live Planetary Positions</h2>
          <p className="section-text">
            GrahaLink is a free astrological tool designed to show the exact position...
          </p>
        </div>
      </div>

      {/* ---------- FAQ ACCORDION ---------- */}
      <div className="faq-wrapper">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <Accordion
          title="What is GrahaLink?"
          content="GrahaLink provides real-time planetary positions, degrees, zodiac signs and more."
        />

        <Accordion
          title="Is the tool free?"
          content="Yes! GrahaLink is completely free to use."
        />

        <Accordion
          title="Do I need to create an account?"
          content="No account is required to access planetary data."
        />
      </div>

    </div>
  );
};

export default Home;
