import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">TS</div>
          <div>
            <h3>T-Shirt Brand</h3>
            <p>Premium oversized graphic T-shirts designed for every vibe.</p>
          </div>
        </div>

        <div className="footer-links">
          <h4>Collections</h4>
          <a href="#browse-section">Marathi</a>
          <a href="#browse-section">Gym</a>
          <a href="#browse-section">Friends</a>
        </div>

        <div className="footer-links">
          <h4>Connect</h4>
          <a href="https://wa.me/919172271693" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="#">Instagram</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} T-Shirt Brand. All rights reserved.</p>
        <p>Made with ❤️ in India</p>
      </div>
    </footer>
  );
};

export default Footer;
