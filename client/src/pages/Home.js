import React, { useState, useRef, useEffect } from 'react';
import '../Components/Home.css';

import homeGif from '../assets/home.gif';
import { Link } from "react-router-dom";

// Import feature icons
import icon1 from '../assets/free-kundli.jpg';
import icon2 from '../assets/kundli-match.png';
import icon3 from '../assets/jyotish-tool.png';
import icon4 from '../assets/live-transit.jpg';
import icon5 from '../assets/panchang.jpg';
import icon6 from '../assets/muhurat.png';
import icon7 from '../assets/calender.jpg';
import icon8 from '../assets/learn-astrology.avif';
import img1 from "../assets/astrologers/img1.png";
import img2 from "../assets/astrologers/img2.jpeg";
import img3 from "../assets/astrologers/img3.png";
import img4 from "../assets/astrologers/img4.jpg";
import img5 from "../assets/astrologers/img5.png";
import img6 from "../assets/astrologers/img6.jpg";
import img7 from "../assets/astrologers/img7.jpg";
import img8 from "../assets/astrologers/img8.jpg";


/* ---------------------------------------------------
   SINGLE-OPEN ACCORDION
--------------------------------------------------- */
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

  /* ------------------ SCROLLER HOOKS ------------------ */
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  


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

{/* ---------- AI ASTROLOGERS SLIDER ---------- */}
<div className="ai-astro-wrapper">

  <div className="ai-astro-header">
    <h2>Book Appointments</h2>
  </div>

  {/* LEFT SCROLL BUTTON */}
  <button className="scroll-btn left" onClick={scrollLeft}>◀</button>

  <div className="ai-astro-scroll" ref={scrollRef}>
    {[
      { name: "Arjun Pandit", price: "₹11/min", img: img1, link: "/astro/arjun" },
      { name: "Mr. Krishnam", price: "₹16/min", img: img2, link: "/astro/krishnam" },
      { name: "Love Guru", price: "₹21/min", img: img3, link: "/astro/loveguru" },
      { name: "Swami Ji", price: "₹17/min", img: img4, link: "/astro/swami" },
      { name: "Astro Ananya", price: "₹11/min", img: img5, link: "/astro/ananya" },
      { name: "Arjun Pandit", price: "₹11/min", img: img6, link: "/astro/arjun" },
      { name: "Mr. Krishnam", price: "₹16/min", img: img7, link: "/astro/krishnam" },
      { name: "Love Guru", price: "₹21/min", img: img8, link: "/astro/loveguru" },
    ].map((astro, index) => (
      <Link to={astro.link} className="ai-astro-card" key={index}>
        <img src={astro.img} alt={astro.name} />
        <p className="ai-name">{astro.name}</p>
        <p className="ai-price">{astro.price}</p>
      </Link>
    ))}
  </div>

  {/* RIGHT SCROLL BUTTON */}
  <button className="scroll-btn right" onClick={scrollRight}>▶</button>
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
