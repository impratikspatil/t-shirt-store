import React from "react";
import { motion } from "framer-motion";

const Hero = ({ featuredImage, onShopClick }) => {
  return (
    <header className="hero">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="eyebrow">New drop · 2026</span>
        <h1 className="title">Wear the statement</h1>
        <p className="subtitle">
          Bold graphic tees for Marathi pride, gym grind, and squad energy. Pick a design,
          message us, done — order in under a minute on WhatsApp.
        </p>

        <div className="hero-actions">
          <button className="hero-btn" onClick={onShopClick}>
            Shop the drop
          </button>
          <button className="hero-btn-outline" onClick={onShopClick}>
            View all styles
          </button>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <img src={featuredImage} alt="Featured T-shirt" loading="eager" />
      </motion.div>
    </header>
  );
};

export default Hero;
