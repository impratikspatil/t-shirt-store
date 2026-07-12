import React, { useState } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

const ProductCard = ({ product, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleOrder = () => {
    const message = `Hi, I want to order:

👕 T-shirt: ${product.name}
💰 Price: ₹${product.price}

🖼 Product Image:
${product.imageUrl}`;

    window.open(`https://wa.me/919172271693?text=${encodeURIComponent(message)}`);
  };

  return (
    <motion.div
      className="card"
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      layout
    >
      <div className="card-image-wrap">
        {!imageLoaded && <div className="image-skeleton" aria-hidden="true" />}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={imageLoaded ? "" : "is-loading"}
          onLoad={() => setImageLoaded(true)}
        />
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
    </motion.div>
  );
};

export default ProductCard;
