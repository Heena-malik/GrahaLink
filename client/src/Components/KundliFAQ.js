// src/Components/KundliFAQ.js
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

/**
 * Simple animated FAQ. Use <KundliFAQ items={[{q, a}, ...]} />
 * If you already inline the FAQ in your page you can replace with <KundliFAQ />
 */

const defaultItems = [
  { q: "Is kundali matching necessary for marriage?", a: "Kundali matching helps determine long-term compatibility between partners. Many families consider it essential before marriage in Vedic astrology." },
  { q: "Is online horoscope matching correct?", a: "Yes, when calculations are based on authentic algorithms such as 36-Gun Milan and Ashtakoot matching. GrahaLink provides a close approximation." },
  { q: "What is Bhakoot matching?", a: "Bhakoot (7 points) checks emotional & financial harmony between partners. It is one of the most important gunas." },
  { q: "What is Tara in Kundli match?", a: "Tara (3 points) analyzes health, lifespan, and wellbeing compatibility between the couple." },
  { q: "What is Yoni in match making?", a: "Yoni (4 points) represents sexual compatibility, nature and attraction between partners." },
  { q: "What is Nadi in horoscope matching?", a: "Nadi (8 points) checks genetic & health compatibility—very important for progeny." },
];

export default function KundliFAQ({ items = defaultItems }) {
  const [openIndex, setOpenIndex] = React.useState(-1);

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? -1 : i));
  }

  return (
    <section className="gl-faq">
      <h2 className="gl-faq-title">FAQ</h2>
      <p className="gl-faq-sub">Frequently Asked Questions</p>

      <div className="gl-faq-list">
        {items.map((it, i) => {
          const open = openIndex === i;
          return (
            <div className={`gl-faq-item ${open ? "open" : ""}`} key={i}>
              <button className="gl-faq-question" onClick={() => toggle(i)} aria-expanded={open}>
                <span>{it.q}</span>
                <span className="icon">{open ? <FaMinus/> : <FaPlus/>}</span>
              </button>

              <div className="gl-faq-answer-wrapper" style={{ height: open ? undefined : 0 }}>
                <div className="gl-faq-answer">
                  <p>{it.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
