import React from "react";

const ProductCard = ({ product }) => {
  const handleOrder = () => {
    const message = `Hi, I want to order:\nT-shirt: ${product.name}\nPrice: ₹${product.price}`;

    window.open(`https://wa.me/919172271693?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="card">
      <div className="card-image-wrap">
        <img src={product.image} alt={product.name} />
        <span className="card-badge">{product.category}</span>
      </div>

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>

        <button className="whatsapp-btn" onClick={handleOrder}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;