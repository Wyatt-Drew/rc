import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>We build homes</h2>
        <p>We build homes in Regina and surrounding areas.</p>
      </div>
      <div className="footer-section">
        <h2>Contact us</h2>
        <p>RC Contracting & Renovations</p>
        <p>Email: <a href="mailto:info@rceventrentals.ca">info@rceventrentals.ca</a></p>
        <p>Phone: 306-585-3828</p>
        <p>Based in Regina, Saskatchewan, Canada.</p>
      </div>
      <div className="footer-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Contact Phone" required />
          <textarea name="question" placeholder="Your Question" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
