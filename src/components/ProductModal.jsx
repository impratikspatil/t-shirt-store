import React, { useState } from "react";

const ProductModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

const handleOrder = () => {
  const message = `Hi, I want to order:

👕 T-shirt: ${product.name}
💰 Price: ₹${product.price}
📏 Size: ${selectedSize}
🎨 Color: ${selectedColor}

🖼 Product Image:
${product.imageUrl}`;

  window.open(
    `https://wa.me/919172271693?text=${encodeURIComponent(message)}`
  );
};
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="product-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="modal-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="modal-content">
          <p className="modal-category">{product.category}</p>

          <h2>{product.name}</h2>

          <p className="modal-price">₹{product.price}</p>

          <p className="modal-description">
            Premium oversized graphic T-shirt designed for comfort,
            streetwear aesthetics, and everyday style.
          </p>

          <div className="option-group">
            <h4>Select Size</h4>

            <div className="option-list">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`option-btn ${
                    selectedSize === size ? "active-option" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
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
                  className={`option-btn ${
                    selectedColor === color ? "active-option" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
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
      </div>
    </div>
  );
};

export default ProductModal;