import React from 'react';
import '../Components/Home.css';  // Make sure this file exists

import homeGif from '../assets/home.gif';
import { FaStar, FaPhoneAlt } from "react-icons/fa";

import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpeg';
import card3 from '../assets/card3.webp';

const Home = () => {
  return (
    <div className="home-wrapper">

      {/* TOP SECTION */}
      <div className="home-container">

        <div className="home-left">
          <h1 className="home-quote">
            "Astrology is the study of the connection between celestial activity...
            and earthly events," says April Elliott Kent. "Those who practice astrology 
            are called astrologers."
          </h1>

          <button className="get-started-btn">Get Started</button>
        </div>

        <div className="home-right">
          <img src={homeGif} alt="Gif Animation" className="home-gif" />
        </div>
      </div>

      {/* CARD SECTION */}
      <div className="card-section">

        {/* Card 1 */}
        <div className="card">
          <img src={card1} alt="Daily Horoscope" className="card-img" />
          <h3>Daily Horoscope</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>Get personalized daily predictions based on astrology.</p>

          <button className="contact-btn">
            <FaPhoneAlt /> Contact
          </button>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={card2} alt="Compatibility" className="card-img" />
          <h3>Compatibility Check</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>Discover love & friendship compatibility using star signs.</p>

          <button className="contact-btn">
            <FaPhoneAlt /> Contact
          </button>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={card3} alt="Birth Chart" className="card-img" />
          <h3>Birth Chart Reading</h3>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>

          <p>Understand deep insights from your personal birth chart.</p>

          <button className="contact-btn">
            <FaPhoneAlt /> Contact
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;
