// src/Components/KundliCommentForm.js
import React, { useState } from "react";

/**
 * Simple comment form.
 * Props:
 *  - onAdd(comment) => called with comment object when user posts
 *
 * The component will create id/date and tries to POST to backend via parent optimistic update.
 */

export default function KundliCommentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      alert("Please enter name and comment");
      return;
    }
    setSubmitting(true);

    const comment = {
      id: Date.now(),
      name: name.trim(),
      email: email.trim(),
      text: text.trim(),
      date: new Date().toISOString(),
    };

    try {
      // optimistic callback
      onAdd && onAdd(comment);
      setName(""); setEmail(""); setText("");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="kundli-comment-form" onSubmit={handleSubmit}>
      <div className="row">
        <input placeholder="Enter Your Full Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email (optional)" value={email} onChange={e=>setEmail(e.target.value)} />
      </div>
      <textarea placeholder="Write Your Comment..." value={text} onChange={e=>setText(e.target.value)} rows="6" />
      <div className="form-foot">
        <small className="privacy">Your email address will not be published. Required fields are marked</small>
        <button className="primary" type="submit" disabled={submitting}>{submitting ? "Sending…" : "Send Comment"}</button>
      </div>
    </form>
  );
}
