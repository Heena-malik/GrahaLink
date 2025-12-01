import React, { useState, useRef, useEffect } from 'react';
import '../Components/Home.css';

import homeGif from '../assets/home.gif';
import popupImg from "../assets/popup.jpg";
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

import img1 from "../assets/astrologers/img1.jpg";
import img2 from "../assets/astrologers/img2.jpeg";
import img3 from "../assets/astrologers/img3.jpg";
import img4 from "../assets/astrologers/img4.jpg";
import img5 from "../assets/astrologers/img5.avif";
import img6 from "../assets/astrologers/img6.jpg";
import img7 from "../assets/astrologers/img7.jpg";
import img8 from "../assets/astrologers/img8.jpg";

/* ---------------- SINGLE OPEN ACCORDION ---------------- */
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
  const scrollRef = useRef(null);

  // ✅ ONLY NEW LOGIC FOR POPUP
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const getAnswer = () => {
    const q = question.toLowerCase();

    if (q.includes("kundli")) setAnswer("You can generate your free Kundli from Free Kundli section.");
    else if (q.includes("match")) setAnswer("Kundli matching is available in matching section.");
    else if (q.includes("muhurat")) setAnswer("All Muhurat details are available in Muhurat section.");
    else if (q.includes("contact")) setAnswer("You can contact us from Contact page.");
    else setAnswer("Thank you! Our support team will reply soon.");

    setQuestion("");
  };

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="home-wrapper">

      {/* ✅ RIGHT SIDE FLOATING POPUP WITH LIVE ANSWER */}
      <div className="floating-help">
        <input type="checkbox" id="helpToggle" hidden />

        <label htmlFor="helpToggle" className="help-avatar">
          <img src={popupImg} alt="Help" />
        </label>

        <div className="help-question-box">
          <h4><b>May I help you?</b></h4>

          {answer && <p className="bot-answer">{answer}</p>}

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask your question..."
          />

          <button onClick={getAnswer}>Send</button>
        </div>
      </div>

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
        {[icon1,icon2,icon3,icon4,icon5,icon6,icon7,icon8].map((icon,i)=>(
          <div key={i} className="feature-card">
            <img src={icon} alt="feature" />
            <p>Feature</p>
          </div>
        ))}
      </div>

      {/* ---------- AI ASTROLOGERS ---------- */}
      <div className="ai-astro-wrapper">
        <h2>AI Astrologers</h2>

        <button className="scroll-btn left" onClick={scrollLeft}>◀</button>

        <div className="ai-astro-scroll" ref={scrollRef}>
          {[img1,img2,img3,img4,img5,img6,img7,img8].map((img,i)=>(
            <Link to="/" className="ai-astro-card" key={i}>
              <img src={img} alt="astro" />
              <p className="ai-name">Astrologer</p>
              <p className="ai-price">₹11/min</p>
            </Link>
          ))}
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>▶</button>
      </div>

      {/* ---------- FAQ ---------- */}
      <div className="faq-wrapper">
        <h2>Frequently Asked Questions</h2>

        <Accordion
          title="What is GrahaLink?"
          isOpen={openIndex === 0}
          onToggle={() => toggleAccordion(0)}
          content="GrahaLink provides real-time astrology tools."
        />

        <Accordion
          title="Is the tool free?"
          isOpen={openIndex === 1}
          onToggle={() => toggleAccordion(1)}
          content="Yes, GrahaLink is fully free to use."
        />

        <Accordion
          title="Do I need to create an account?"
          isOpen={openIndex === 2}
          onToggle={() => toggleAccordion(2)}
          content="No, account is optional."
        />
      </div>

    </div>
  );
};

export default Home;
