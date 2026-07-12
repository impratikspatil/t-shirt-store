import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProductModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleOrder = () => {
    const message = `Hi, I want to order:

👕 T-shirt: ${product.name}
💰 Price: ₹${product.price}
📏 Size: ${selectedSize}
🎨 Color: ${selectedColor}

🖼 Product Image:
${product.imageUrl}`;

    window.open(`https://wa.me/919172271693?text=${encodeURIComponent(message)}`);
  };

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="product-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal-content">
          <p className="modal-category">{product.category}</p>

          <h2 id="modal-product-title">{product.name}</h2>

          <p className="modal-price">₹{product.price}</p>

          <p className="modal-description">
            Premium oversized graphic T-shirt designed for comfort, streetwear aesthetics, and
            everyday style.
          </p>

          <div className="option-group">
            <h4>Select Size</h4>
            <div className="option-list">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`option-btn ${selectedSize === size ? "active-option" : ""}`}
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <h4>Select Color</h4>
            <div className="option-list">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`option-btn ${selectedColor === color ? "active-option" : ""}`}
                  onClick={() => setSelectedColor(color)}
                  aria-pressed={selectedColor === color}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <button className="modal-order-btn" onClick={handleOrder}>
            Order on WhatsApp
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;
