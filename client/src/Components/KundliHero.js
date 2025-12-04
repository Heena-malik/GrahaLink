// src/Components/KundliHero.js
import React from "react";
import "../Components/KundliCompatibility.css";
import { FaStar } from "react-icons/fa";

export default function KundliHero() {
  return (
    <section className="kundli-hero">
      <h1 className="title">Kundli Matching</h1>

      <div className="breadcrumb">
        <p>Home <span>›</span> Kundli Matching</p>
      </div>

      <p className="subtitle">
        Discover compatibility between two individuals using ancient Vedic astrology.
        Enter both partner's birth details and check how well the stars align.
      </p>

      <div className="divider">
        <FaStar className="glow" />
        <FaStar className="glow" />
        <FaStar className="glow" />
      </div>

      <h2 className="main-headline">
        Kundali Matching for Marriage Compatibility
      </h2>

      <p className="description">
        Kundli matching helps determine the chances of a successful marriage. GrahaLink uses
        astrology-based algorithms to calculate Guna Milan score out of 36 points.
        This test includes Manglik check and detailed analysis of both horoscopes.
      </p>
    </section>
  );
}
