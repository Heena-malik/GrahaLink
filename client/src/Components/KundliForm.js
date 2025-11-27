// src/Components/KundliForm.js
import React, { useState } from "react";
import { FaUser, FaClock, FaCalendarAlt, FaMapMarkerAlt, FaHeart, FaSpinner } from "react-icons/fa";

export default function KundliForm() {
  const empty = { name: "", day: "", month: "", year: "", hour: "", minute: "", second: "", ampm: "AM", place: "" };
  const [groom, setGroom] = useState({ ...empty });
  const [bride, setBride] = useState({ ...empty });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const onlyLetters = (s) => s.replace(/[^A-Za-z\s]/g, "");
  const onlyDigits = (s) => s.replace(/\D/g, "");

  // generic handler for name fields -> only alphabets + spaces
  const handleName = (setter) => (e) => {
    const val = onlyLetters(e.target.value);
    setter(prev => ({ ...prev, name: val }));
  };

  // generic handler for numeric subfields with optional max length and clamp
  const handleNum = (setter, key, maxLen = 2, min = 0, max = 99) => (e) => {
    let v = onlyDigits(e.target.value).slice(0, maxLen);
    if (v === "") { setter(prev => ({ ...prev, [key]: "" })); return; }
    let n = parseInt(v, 10);
    if (Number.isNaN(n)) n = "";
    if (n !== "") {
      if (n < min) n = min;
      if (n > max) n = max;
      v = String(n).padStart(v.length, "0");
    }
    setter(prev => ({ ...prev, [key]: String(v) }));
  };

  const handleText = (setter, key) => (e) => setter(prev => ({ ...prev, [key]: e.target.value }));

  async function submitMatch(e) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/kundli/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ groom, bride }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setResult({ score: 10, label: "Mock", error: true });
    }
    setLoading(false);
  }

  function resetAll() {
    setGroom({ ...empty }); setBride({ ...empty }); setResult(null);
  }

  return (
    <section className="kform-wrapper">
      <div className="kform-box">
        <form className="kform-grid" onSubmit={submitMatch}>
          <div className="kcard">
            <div className="kcard-header">
              <img className="small-avatar" src="/assets/card1.jpg" alt="groom avatar" />
              <div>
                <h2>Enter <span className="highlight">Groom's</span> Details</h2>
              </div>
            </div>

            <div className="kfield">
              <div className="label-left"><span className="ico"><FaUser /></span> Name</div>
              <div style={{ flex:1 }}>
                <input
                  className="kinput"
                  placeholder="Enter boy's name"
                  value={groom.name}
                  onChange={handleName(setGroom)}
                  inputMode="text"
                  maxLength={48}
                  required
                />
              </div>
            </div>

            <div className="kfield">
              <div className="label-left"><span className="ico"><FaCalendarAlt /></span> Birthday <small>(DD - MM - YYYY)</small></div>
              <div className="row3">
                <input className="kinput kinput-small" placeholder="DD" value={groom.day} onChange={handleNum(setGroom,"day",2,1,31)} inputMode="numeric" />
                <input className="kinput kinput-small" placeholder="MM" value={groom.month} onChange={handleNum(setGroom,"month",2,1,12)} inputMode="numeric" />
                <input className="kinput" placeholder="YYYY" value={groom.year} onChange={handleNum(setGroom,"year",4,1900,2100)} inputMode="numeric" />
              </div>
            </div>

            <div className="kfield">
              <div className="label-left"><span className="ico"><FaClock /></span> Time <small>(HH:MM:SS)</small></div>
              <div className="row4">
                <input className="kinput kinput-small" placeholder="HH" value={groom.hour} onChange={handleNum(setGroom,"hour",2,0,23)} inputMode="numeric" />
                <input className="kinput kinput-small" placeholder="MM" value={groom.minute} onChange={handleNum(setGroom,"minute",2,0,59)} inputMode="numeric" />
                <input className="kinput kinput-small" placeholder="SS" value={groom.second} onChange={handleNum(setGroom,"second",2,0,59)} inputMode="numeric" />
                <select className="kselect" value={groom.ampm} onChange={e => setGroom(prev => ({...prev, ampm: e.target.value}))}>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>

            <div className="kfield">
              <div className="label-left"><span className="ico"><FaMapMarkerAlt /></span> Birth Place</div>
              <div style={{ flex:1 }}>
                <input className="kinput" placeholder="Enter boy's birth place" value={groom.place} onChange={handleText(setGroom,"place")} />
              </div>
            </div>
          </div>

          <div className="kcard">
            <div className="kcard-header">
              <img className="small-avatar" src="/assets/card3.webp" alt="bride avatar" />
              <div>
                <h2>Enter <span className="highlight">Bride's</span> Details</h2>
              </div>
            </div>

            <div className="kfield">
              <div className="label-left"><span className="ico"><FaUser /></span> Name</div>
              <div style={{ flex:1 }}>
                <input
                  className="kinput"
                  placeholder="Enter girl's name"
                  value={bride.name}
                  onChange={handleName(setBride)}
                  inputMode="text"
                  maxLength={48}
                  required
                />
              </div>
            </div>

            <div className="kfield">
              <div className="label-left"><span className="ico"><FaCalendarAlt /></span> Birthday <small>(DD - MM - YYYY)</small></div>
              <div className="row3">
                <input className="kinput kinput-small" placeholder="DD" value={bride.day} onChange={handleNum(setBride,"day",2,1,31)} inputMode="numeric" />
                <input className="kinput kinput-small" placeholder="MM" value={bride.month} onChange={handleNum(setBride,"month",2,1,12)} inputMode="numeric" />
                <input className="kinput" placeholder="YYYY" value={bride.year} onChange={handleNum(setBride,"year",4,1900,2100)} inputMode="numeric" />
              </div>
            </div>

            <div className="kfield">
              <div className="label-left"><span className="ico"><FaClock /></span> Time <small>(HH:MM:SS)</small></div>
              <div className="row4">
                <input className="kinput kinput-small" placeholder="HH" value={bride.hour} onChange={handleNum(setBride,"hour",2,0,23)} inputMode="numeric" />
                <input className="kinput kinput-small" placeholder="MM" value={bride.minute} onChange={handleNum(setBride,"minute",2,0,59)} inputMode="numeric" />
                <input className="kinput kinput-small" placeholder="SS" value={bride.second} onChange={handleNum(setBride,"second",2,0,59)} inputMode="numeric" />
                <select className="kselect" value={bride.ampm} onChange={e => setBride(prev => ({...prev, ampm: e.target.value}))}>
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>

            <div className="kfield">
              <div className="label-left"><span className="ico"><FaMapMarkerAlt /></span> Birth Place</div>
              <div style={{ flex:1 }}>
                <input className="kinput" placeholder="Enter girl's birth place" value={bride.place} onChange={handleText(setBride,"place")} />
              </div>
            </div>
          </div>

          <div className="action-bar-full">
            <button className="match-btn" type="submit" disabled={loading}>
              {loading ? (<><FaSpinner className="spin" /> Matching…</>) : (<><FaHeart /> Match Your Kundli</>)}
            </button>
            <button type="button" className="btn-reset" onClick={resetAll} style={{ marginLeft:12, borderRadius:10 }}>Reset</button>
          </div>

          {result && (
            <div className="result-box">
              <div style={{ fontWeight:800, fontSize:18 }}>Score: {result.score}/36</div>
              <div style={{ color:'#111827', marginTop:6 }}>{result.label || (result.score >= 28 ? "Excellent" : result.score >=22 ? "Very Good" : result.score >=16 ? "Average" : "Low")}</div>
              {result.error && <small style={{ color:'#d34a2b' }}>Error fetching backend — showing fallback score.</small>}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
