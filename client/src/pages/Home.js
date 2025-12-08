import React, { useState, useRef, useEffect } from "react";
import "../Components/Home.css";

// --- ALL REQUIRED ASSET IMPORTS ARE HERE ---
import homeGif from "../assets/home.gif";
import icon1 from "../assets/free-kundli.jpg";
import icon2 from "../assets/kundli-match.png";
import icon3 from "../assets/jyotish-tool.png";
import icon4 from "../assets/live-transit.jpg";
import icon5 from "../assets/panchang.jpg";
import icon6 from "../assets/muhurat.png";
import icon7 from "../assets/calender.jpg";
import icon8 from "../assets/learn-astrology.avif";
import Pandit from "../assets/chatbot.webp";

// --- LINK COMPONENT IMPORT ---
import { Link } from "react-router-dom";

const Accordion = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.style.maxHeight = isOpen
      ? contentRef.current.scrollHeight + "px"
      : "0px";
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-header" onClick={onToggle}>
        {title}
        <span className={`arrow ${isOpen ? "rotate" : ""}`}>▼</span>
      </button>

      <div ref={contentRef} className="accordion-content">
        <div className="accordion-inner">
          {content.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [astrologers, setAstrologers] = useState([]);

  const scrollRef = useRef(null);

  // SCROLL_DISTANCE is (Card Width: 172px + Gap: 22px) = 194px for desktop
  const SCROLL_DISTANCE = 194;

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      const currentScroll = scrollElement.scrollLeft;

      // Calculate the new scroll position
      const newScroll = currentScroll - SCROLL_DISTANCE;

      // If already at the start, jump to the end for a looping effect
      if (newScroll <= 0) {
        scrollElement.scrollTo({
          left: scrollElement.scrollWidth - scrollElement.clientWidth,
          behavior: "smooth",
        });
      } else {
        scrollElement.scrollBy({ left: -SCROLL_DISTANCE, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      const currentScroll = scrollElement.scrollLeft;

      // Calculate max scroll position
      const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;

      // Calculate the new scroll position
      const newScroll = currentScroll + SCROLL_DISTANCE;

      // If near the end, jump to the start for a looping effect
      if (newScroll >= maxScroll) {
        scrollElement.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        scrollElement.scrollBy({ left: SCROLL_DISTANCE, behavior: "smooth" });
      }
    }
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ------------------ Fetch astrologers from MongoDB ------------------
  useEffect(() => {
    const fetchAstrologers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/astrologers");

        if (!res.ok) {
          throw new Error("Failed to fetch astrologers");
        }

        const data = await res.json();

        const fixed = data.map((item) => ({
          ...item,
          image: `http://localhost:5000${item.image}`,
        }));

        setAstrologers(fixed);
      } catch (error) {
        console.log("Error fetching astrologers:", error);
      }
    };

    fetchAstrologers();
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-left">
          <h1 className="home-quote">
            "Astrology is the study of the connection between celestial activity
            and earthly events. Those who practice astrology are called
            astrologers."
          </h1>
          <div className="avatar-row">
            <img src={Pandit} alt="Pandit Avatar" className="pandit-avatar" />

            <div className="bubble-btn-area">
              <Link to="/signin" className="hint-bubble-link">
                <div className="hint-bubble">
                  <span className="hint-text">Start your Kundli now!</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="home-right"
          style={{ backgroundImage: `url(${homeGif})` }}
        ></div>
      </div>
      {/* ---------- FEATURE CARDS ---------- */}
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

      {/* ---------- Book appointment (SLIDING LOOP) ---------- */}
      <div className="ai-astro-wrapper">
        <div className="ai-astro-header">
          <h2>Book Appointments</h2>
        </div>

        <button className="scroll-btn left" onClick={scrollLeft}>
          ◀
        </button>

        <div className="ai-astro-scroll" ref={scrollRef}>
          {astrologers.length === 0 ? (
            <p style={{ padding: "20px" }}>Loading astrologers...</p>
          ) : (
            astrologers.map((astro, index) => (
              <Link to={astro.link} className="ai-astro-card" key={index}>
                <img src={astro.image} alt={astro.name} />
                <p className="ai-name">{astro.name}</p>
                <p className="ai-price">{astro.price}</p>
              </Link>
            ))
          )}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          ▶
        </button>
      </div>

      {/* ---------- CONTENT SECTION ---------- */}
      <div className="content-wrapper">
        <div className="content-section">
          <h2 className="section-title">Live Planetary Positions</h2>
          <p className="section-text">
            GrahaLink is a free astrological tool designed to show the exact
            position...
          </p>
        </div>
      </div>

      {/* ---------- FAQ ACCORDION ---------- */}
      <div className="faq-wrapper">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <Accordion
          title="What is GrahaLink?"
          isOpen={openIndex === 0}
          onToggle={() => toggleAccordion(0)}
          content={`GrahaLink is a smart astrology platform designed to provide accurate planetary data, personalized kundli generation, daily panchang, and various astrological calculators.
It helps users explore:
• Real-time planetary positions  
• Rashi and Nakshatra details  
• Muhurat timings  
• Kundali and matchmaking insights  
GrahaLink aims to make astrology simple, fast, and reliable for everyone.`}
        />

        <Accordion
          title="Is the tool free?"
          isOpen={openIndex === 1}
          onToggle={() => toggleAccordion(1)}
          content={`Yes, GrahaLink is free to use.
You can access features like:
• Kundli generation  
• Rashi & Nakshatra calculator  
• Panchang  
• Vivah & Griha Pravesh Muhurat  
• Basic predictions  

Some advanced features like personalized reports may be premium, but all essential tools remain free.`}
        />

        <Accordion
          title="Do I need to create an account?"
          isOpen={openIndex === 2}
          onToggle={() => toggleAccordion(2)}
          content={`No, you can use GrahaLink without creating an account.
However, creating an account gives extra benefits such as:
• Saving your Kundli  
• Storing multiple family members’ charts  
• Access to past reports  
• Personalized dashboard  

Account creation is optional but useful.`}
        />
      </div>
    </div>
  );
};

export default Home;
