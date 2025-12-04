// src/Components/KundliComments.js
import React, { useEffect, useState } from "react";
import KundliCommentForm from "./KundliCommentForm";
import { FaUser, FaReply } from "react-icons/fa";

/**
 * Comments component:
 * - tries to load from /api/comments
 * - fallback to localStorage if API not available
 * - allows posting via KundliCommentForm which calls onAdd(comment)
 */

export default function KundliComments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // load comments from backend or localStorage
  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch("/api/comments");
        if (!res.ok) throw new Error("no api");
        const data = await res.json();
        if (mounted) {
          setComments(Array.isArray(data) ? data : []);
          setLoading(false);
          localStorage.setItem("grahalink_comments", JSON.stringify(data));
        }
      } catch (err) {
        // fallback to localStorage
        const saved = localStorage.getItem("grahalink_comments");
        if (saved && mounted) {
          try { setComments(JSON.parse(saved)); } catch(e){ setComments([]); }
        }
        setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  // add comment (from child form)
  async function handleAddComment(comment) {
    // optimistic UI update
    setComments(prev => [comment, ...prev]);
    localStorage.setItem("grahalink_comments", JSON.stringify([comment, ...comments]));

    // try to save to backend (optional)
    try {
      await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      });
    } catch (err) {
      // ignore - we already saved to localStorage
      console.warn("comments: backend save failed", err.message);
    }
  }

  return (
    <section className="comments-section">
      <div className="comments-header">
        <h2>All Comments</h2>
        <div className="leave-btn-wrap">
          <button className="leave-btn" onClick={() => document.querySelector(".comment-form-wrap")?.scrollIntoView({behavior:"smooth"})}>
            Leave a Comment
          </button>
        </div>
      </div>

      <div className="comment-form-wrap">
        <KundliCommentForm onAdd={handleAddComment} />
      </div>

      <div className="comment-list">
        {loading && <p className="muted">Loading comments...</p>}
        {!loading && comments.length === 0 && <p className="muted">No comments yet — be the first!</p>}
        {comments.map(c => (
          <article className="comment-item" key={c.id || c.date || Math.random()}>
            <div className="avatar"><FaUser /></div>
            <div className="c-main">
              <header>
                <strong className="c-name">{c.name || "Anonymous"}</strong>
                <span className="c-date">{c.date ? new Date(c.date).toLocaleDateString() : ""}</span>
              </header>
              <div className="c-text">{c.text}</div>
            </div>
            <div className="c-actions">
              <button className="reply"><FaReply/> Reply</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
