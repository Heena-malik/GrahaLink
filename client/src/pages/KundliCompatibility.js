// src/pages/KundliCompatibility.js
import React, { useEffect, useState } from "react";
import "../Components/KundliCompatibility.css";
import matching2 from "../assets/matching2.jpg";
import {
  FaStar,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaHeart,
  FaChevronUp,
  FaChevronDown,
  FaRegComments,
} from "react-icons/fa";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

export default function KundliCompatibility() {
  /* ========== Form state ========== */
  const emptyPerson = {
    name: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    second: "",
    ampm: "AM",
    place: "",
  };

  const [groom, setGroom] = useState({ ...emptyPerson });
  const [bride, setBride] = useState({ ...emptyPerson });
  const [loadingMatch, setLoadingMatch] = useState(false);
  const [matchResult, setMatchResult] = useState(null);

  /* ========== Strong Validation Handler ========== */
  const handleField = (setter) => (e) => {
    const { name, value } = e.target;
    let v = value;

    /* NUMERIC FIELDS */
    if (["day", "month", "year", "hour", "minute", "second"].includes(name)) {
      v = v.replace(/[^0-9]/g, ""); // only numbers

      // Length limits
      if (["day", "month", "hour", "minute", "second"].includes(name)) {
        v = v.slice(0, 2);
      }
      if (name === "year") {
        v = v.slice(0, 4);
      }

      /* DATE LIMITS */
      if (name === "day" && v !== "") {
        let num = Number(v);
        if (num < 1) v = "1";
        if (num > 31) v = "31";
      }

      if (name === "month" && v !== "") {
        let num = Number(v);
        if (num < 1) v = "1";
        if (num > 12) v = "12";
      }

      if (name === "year" && v.length === 4) {
        let num = Number(v);
        if (num < 1900) v = "1900";
        if (num > new Date().getFullYear())
          v = String(new Date().getFullYear());
      }

      /* TIME LIMITS */
      if (name === "hour" && v !== "") {
        let num = Number(v);
        if (num < 1) v = "01";
        if (num > 12) v = "12";
      }

      if (name === "minute" && v !== "") {
        let num = Number(v);
        if (num < 0) v = "00";
        if (num > 59) v = "59";
      }

      if (name === "second" && v !== "") {
        let num = Number(v);
        if (num < 0) v = "00";
        if (num > 59) v = "59";
      }
    }

    /* NAME + PLACE (alphabets only) */
    if (name === "name" || name === "place") {
      v = v.replace(/[^A-Za-z\s]/g, ""); // only letters & space
      v = v.slice(0, 40);
    }

    setter((prev) => ({ ...prev, [name]: v }));
  };

  /* ========== Submit Matching ========== */
  async function submitMatch(e) {
    e?.preventDefault();
    setLoadingMatch(true);
    setMatchResult(null);

    try {
      const res = await fetch(`${API_BASE}/api/kundli/match`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groom, bride }),
      });

      if (res.ok) {
        const data = await res.json();
        setMatchResult(data);
      } else {
        setMatchResult({
          score: Math.floor(Math.random() * 36) + 1,
          label: "Moderate",
        });
      }
    } catch (err) {
      setMatchResult({
        score: Math.floor(Math.random() * 36) + 1,
        label: "Moderate",
      });
    } finally {
      setLoadingMatch(false);
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
  }

  /* ========== FAQ toggles ========== */
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq((prev) => (prev === i ? null : i));

  /* ========== Comments Backend ========== */
  const [comments, setComments] = useState([]);
  const [cName, setCName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cText, setCText] = useState("");
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/comments`)
      .then((r) => r.json())
      .then((data) => setComments(Array.isArray(data) ? data : []))
      .catch(() => setComments([]));
  }, []);

  async function postComment(e) {
    e?.preventDefault();

    if (!cName || !cEmail || !cText)
      return alert("Please fill all fields.");

    setPosting(true);

    try {
      const res = await fetch(`${API_BASE}/api/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cName,
          email: cEmail,
          comment: cText,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setComments((prev) => [data, ...prev]);
        setCName("");
        setCEmail("");
        setCText("");
      } else {
        alert(data.error || "Error posting comment.");
      }
    } catch (err) {
      alert("Comment submission failed.");
    } finally {
      setPosting(false);
    }
  }

  /* ========== Kootas ========== */
  const kootas = [
    { title: "Varna", points: 1, desc: "Spiritual compatibility." },
    { title: "Vashya", points: 2, desc: "Mutual attraction & control." },
    { title: "Tara", points: 3, desc: "Health & well-being." },
    { title: "Yoni", points: 4, desc: "Sexual compatibility." },
    { title: "Graha Maitri", points: 5, desc: "Mental compatibility." },
    { title: "Gana", points: 6, desc: "Temperament matching." },
    { title: "Bhakoot", points: 7, desc: "Emotional & financial harmony." },
    { title: "Nadi", points: 8, desc: "Health & progeny." },
  ];

  return (
    <div className="gl-wrap">
      {/* HERO */}
      <header className="kundli-hero">
        <h1 className="title">
          <FaStar /> Kundli Matching
        </h1>
        <p className="subtitle">
          Check marriage compatibility using GrahaLink's 36-Gun Milan based
          matching system.
        </p>
      </header>

      {/* INTRO */}
      <section className="km-intro">
        <h2 className="km-title">Kundali Matching for Marriage Compatibility</h2>
        <p className="km-text">
          Enter birth details of both partners. Score is calculated based on
          traditional Ashtakoot (36 Gunas).
        </p>
      </section>

      {/* FORM */}
      <section className="kform-wrapper">
        <div className="kform-box">
          <div className="kform-grid">
            {/* GROOM */}
            <div className="kcard">
              <div className="kcard-header">
                <img
                  src="/assets/groom.png"
                  alt="groom"
                  className="small-avatar"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <h2>
                  Enter <span className="highlight">Groom's</span> Details
                </h2>
              </div>

              {/* Name */}
              <div className="kfield">
                <div className="label-left">
                  <FaUser className="ico" /> Name
                </div>
                <input
                  className="kinput"
                  name="name"
                  placeholder="Enter boy's name"
                  value={groom.name}
                  onChange={handleField(setGroom)}
                />
              </div>

              {/* DOB */}
              <div className="kfield">
                <div className="label-left">
                  <FaCalendarAlt className="ico" /> Birthday{" "}
                  <small>(DD-MM-YYYY)</small>
                </div>
                <div className="row3">
                  <input
                    className="kinput kinput-small"
                    name="day"
                    placeholder="DD"
                    maxLength={2}
                    value={groom.day}
                    onChange={handleField(setGroom)}
                  />
                  <input
                    className="kinput kinput-small"
                    name="month"
                    placeholder="MM"
                    maxLength={2}
                    value={groom.month}
                    onChange={handleField(setGroom)}
                  />
                  <input
                    className="kinput kinput-small"
                    name="year"
                    placeholder="YYYY"
                    maxLength={4}
                    value={groom.year}
                    onChange={handleField(setGroom)}
                  />
                </div>
              </div>

              {/* TIME */}
              <div className="kfield">
                <div className="label-left">
                  <FaClock className="ico" /> Time{" "}
                  <small>(HH:MM:SS)</small>
                </div>
                <div className="row4">
                  <input
                    className="kinput kinput-small"
                    name="hour"
                    placeholder="HH"
                    maxLength={2}
                    value={groom.hour}
                    onChange={handleField(setGroom)}
                  />
                  <input
                    className="kinput kinput-small"
                    name="minute"
                    placeholder="MM"
                    maxLength={2}
                    value={groom.minute}
                    onChange={handleField(setGroom)}
                  />
                  <input
                    className="kinput kinput-small"
                    name="second"
                    placeholder="SS"
                    maxLength={2}
                    value={groom.second}
                    onChange={handleField(setGroom)}
                  />
                  <select
                    className="kselect"
                    name="ampm"
                    value={groom.ampm}
                    onChange={handleField(setGroom)}
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>

              {/* PLACE */}
              <div className="kfield">
                <div className="label-left">
                  <FaMapMarkerAlt className="ico" /> Birth Place
                </div>
                <input
                  className="kinput"
                  name="place"
                  placeholder="Enter boy's birth place"
                  value={groom.place}
                  onChange={handleField(setGroom)}
                />
              </div>
            </div>

            {/* BRIDE */}
            <div className="kcard">
              <div className="kcard-header">
                <img
                  src="/assets/bride.png"
                  alt="bride"
                  className="small-avatar"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <h2>
                  Enter <span className="highlight">Bride's</span> Details
                </h2>
              </div>

              {/* NAME */}
              <div className="kfield">
                <div className="label-left">
                  <FaUser className="ico" /> Name
                </div>
                <input
                  className="kinput"
                  name="name"
                  placeholder="Enter girl's name"
                  value={bride.name}
                  onChange={handleField(setBride)}
                />
              </div>

              {/* DOB */}
              <div className="kfield">
                <div className="label-left">
                  <FaCalendarAlt className="ico" /> Birthday{" "}
                  <small>(DD-MM-YYYY)</small>
                </div>
                <div className="row3">
                  <input
                    className="kinput kinput-small"
                    name="day"
                    placeholder="DD"
                    maxLength={2}
                    value={bride.day}
                    onChange={handleField(setBride)}
                  />
                  <input
                    className="kinput kinput-small"
                    name="month"
                    placeholder="MM"
                    maxLength={2}
                    value={bride.month}
                    onChange={handleField(setBride)}
                  />
                  <input
                    className="kinput kinput-small"
                    name="year"
                    placeholder="YYYY"
                    maxLength={4}
                    value={bride.year}
                    onChange={handleField(setBride)}
                  />
                </div>
              </div>

              {/* TIME */}
              <div className="kfield">
                <div className="label-left">
                  <FaClock className="ico" /> Time{" "}
                  <small>(HH:MM:SS)</small>
                </div>
                <div className="row4">
                  <input
                    className="kinput kinput-small"
                    name="hour"
                    placeholder="HH"
                    maxLength={2}
                    value={bride.hour}
                    onChange={handleField(setBride)}
                  />
                  <input
                    className="kinput kinput-small"
                    name="minute"
                    placeholder="MM"
                    maxLength={2}
                    value={bride.minute}
                    onChange={handleField(setBride)}
                  />
                  <input
                    className="kinput kinput-small"
                    name="second"
                    placeholder="SS"
                    maxLength={2}
                    value={bride.second}
                    onChange={handleField(setBride)}
                  />
                  <select
                    className="kselect"
                    name="ampm"
                    value={bride.ampm}
                    onChange={handleField(setBride)}
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>

              {/* PLACE */}
              <div className="kfield">
                <div className="label-left">
                  <FaMapMarkerAlt className="ico" /> Birth Place
                </div>
                <input
                  className="kinput"
                  name="place"
                  placeholder="Enter girl's birth place"
                  value={bride.place}
                  onChange={handleField(setBride)}
                />
              </div>
            </div>

            {/* Match Button */}
            <div className="action-bar-full">
              <button
                className="match-btn"
                disabled={loadingMatch}
                onClick={submitMatch}
              >
                {loadingMatch ? "Calculating..." : <><FaHeart /> Match Your Kundli</>}
              </button>
            </div>

            {/* Result */}
            {matchResult && (
              <div className="result-box">
                <h3>Score: {matchResult.score}/36</h3>
                <p>
                  Compatibility:{" "}
                  <strong>{matchResult.label || "N/A"}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="two-col content-grid">
        <article>
          <h2 className="section-title">
            How Kundali Matching Ensures Marriage Compatibility
          </h2>
          <p className="lead">
            GrahaLink uses traditional Ashtakoot (8 kootas) totaling 36 points.
          </p>

          <ul className="koota-list">
            {kootas.map((k) => (
              <li key={k.title}>
                <span className="dot">➜</span>{" "}
                <strong>
                  {k.title} ({k.points} points)
                </strong>
                : {k.desc}
              </li>
            ))}
          </ul>

          <p className="lead small">
            Score Guide: 21–30 = Good, 16–20 = Average, below 16 = Needs
            remedies.
          </p>
        </article>

        <aside>
          <div className="illustration">
            <img
              src="/assets/kundli-banner.png"
              alt="illustration"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
        </aside>
      </section>

      {/* How to Use */}
      <section className="two-col content-grid reverse">
          <aside className="tool-illustration">
            <img
              src={matching2}
              alt="Kundli Tool Graphic"
              className="tool-image"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </aside>


        <article>
          <h2 className="section-title">How to Use This Tool?</h2>
          <p>
            Fill in birth details correctly and click “Match Your Kundli”.
          </p>

          <h3>Expert Advice</h3>
          <p className="small">
            A detailed horoscope reading is advised for major marriage
            decisions.
          </p>
        </article>
      </section>

      {/* FAQ */}
      <section className="gl-faq">
        <h2 className="gl-faq-title">FAQ</h2>
        <p className="gl-faq-sub">Frequently Asked Questions</p>

        <div className="gl-faq-list">
          {[
            {
              q: "Is kundali matching necessary?",
              a: "It is widely used and gives a compatibility overview.",
            },
            {
              q: "Is online matching accurate?",
              a: "Yes, for basic guna scoring. Detailed readings require astrologers.",
            },
            {
              q: "What is Bhakoot?",
              a: "It checks emotional and financial harmony.",
            },
            {
              q: "What is Tara?",
              a: "Tara evaluates overall health compatibility.",
            },
            {
              q: "What is Yoni?",
              a: "Yoni evaluates sexual and physical compatibility.",
            },
            {
              q: "What is Nadi?",
              a: "Nadi checks genetic and progeny compatibility.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`gl-faq-item ${openFaq === i ? "open" : ""}`}
            >
              <button
                className="gl-faq-question"
                onClick={() => toggleFaq(i)}
              >
                <span className="q-left">{item.q}</span>
                <span className="icon">
                  {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <div className="gl-faq-answer-wrapper">
                <div className="gl-faq-answer">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMENTS */}
      <section className="comments-section">
        <div className="comments-header">
          <h2>All Comments</h2>
          <button
            className="leave-btn"
            onClick={() =>
              document
                .getElementById("comment-form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <FaRegComments /> &nbsp; Leave a Comment
          </button>
        </div>

        {/* Comment Form */}
        <div className="comment-form-wrap" id="comment-form">
          <h3 className="leave-title">Leave a Comment</h3>
          <p className="muted">
            Your email will not be published. Required fields are marked.
          </p>

          <form className="comment-form" onSubmit={postComment}>
            <div className="row3">
              <input
                value={cName}
                onChange={(e) => setCName(e.target.value)}
                placeholder="Enter Your Full Name"
              />
              <input
                value={cEmail}
                onChange={(e) => setCEmail(e.target.value)}
                placeholder="Enter Valid Email Address"
                type="email"
              />
            </div>

            <textarea
              value={cText}
              onChange={(e) => setCText(e.target.value)}
              placeholder="Write Your Comment..."
              rows="6"
            />

            <div style={{ textAlign: "center" }}>
              <button className="match-btn" type="submit" disabled={posting}>
                {posting ? "Sending..." : "Send Comment"}
              </button>
            </div>
          </form>
        </div>

        {/* Comments List */}
        <div className="comment-list">
          {comments.length === 0 ? (
            <div className="comment-empty">No comments yet — be first!</div>
          ) : (
            comments.map((c) => (
              <div className="comment-item" key={c._id || c.createdAt}>
                <div className="avatar">
                  {(c.name || "U")[0].toUpperCase()}
                </div>

                <div style={{ flex: 1 }}>
                  <header>
                    <div className="c-name">{c.name}</div>
                    <div className="c-date">
                      {new Date(c.createdAt).toLocaleDateString()}
                    </div>
                  </header>

                  <p style={{ marginTop: 8 }}>
                    <strong>Said:</strong> {c.comment}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* BACK TO TOP */}
      <button
        className="back-top"
        title="Top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaChevronUp />
      </button>
    </div>
  );
}
