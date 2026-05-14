import React from "react";

const ProductCard = ({ product, onClick }) => {

  const handleOrder = () => {
  const message = `Hi, I want to order:

👕 T-shirt: ${product.name}
💰 Price: ₹${product.price}

🖼 Product Image:
${product.imageUrl}`;

  window.open(
    `https://wa.me/919172271693?text=${encodeURIComponent(message)}`
  );
};


  return (
    <div className="card" onClick={onClick}>
      <div className="card-image-wrap">
        <div className="card-image-wrap">
            <img src={product.image} alt={product.name} />
         </div>

       <span className="card-badge">{product.category}</span>
      </div>

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>

        <div className="meta">
          <span>{product.colors.join(", ")}</span>
          <span>{product.sizes.join(", ")}</span>
        </div>

        <button
            className="whatsapp-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleOrder();
            }}
          >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;