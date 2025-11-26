import React from "react";
import "../Components/Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper">

      {/* HEADER */}
      <div className="contact-header">
        <h1><FaStar className="icon-glow" /> Contact Us</h1>
        <p>We’d love to hear from you! Reach out using any method below.</p>
      </div>

      <div className="contact-section">

        {/* CONTACT INFO */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-card">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>support@grahalink.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Punjab, India</p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />

            <textarea placeholder="Your Message" required></textarea>

            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
