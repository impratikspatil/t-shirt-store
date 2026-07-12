import React from "react";

const MESSAGES = [
  "Free shipping on prepaid orders",
  "New drop live now",
  "Order in 60 seconds on WhatsApp",
  "Made in India",
];

const Marquee = () => {
  const loop = [...MESSAGES, ...MESSAGES];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((msg, i) => (
          <span key={i}>{msg}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
