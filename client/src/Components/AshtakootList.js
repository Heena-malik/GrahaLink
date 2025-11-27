// src/Components/AshtakootList.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AshtakootList() {
  const items = [
    { title: "Varna (1 point)", text: "Spiritual & mental harmony." },
    { title: "Vashya (2 points)", text: "Mutual control & understanding." },
    { title: "Tara (3 points)", text: "Health & well-being." },
    { title: "Yoni (4 points)", text: "Physical & intimate compatibility." },
    { title: "Graha Maitri (5 points)", text: "Mental & friendship connection." },
    { title: "Gana (6 points)", text: "Nature and temperament." },
    { title: "Bhakoot (7 points)", text: "Emotional & financial unity." },
    { title: "Nadi (8 points)", text: "Progeny & long-term stability." },
  ];

  return (
    <section className="section koot-list">
      <h2>Ashtakoot Parameters</h2>
      <ul>
        {items.map((i) => (
          <li key={i.title}>
            <FaCheckCircle /> <strong>{i.title}</strong> – {i.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
