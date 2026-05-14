import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";
import ProductModal from "./components/ProductModal";

function App() {
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const scrollToBrowse = () => {
    document.getElementById("browse-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-shell">
      <div className="container">
        <NavBar onShopClick={scrollToBrowse} />

        <header className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Custom T-Shirts | Fast WhatsApp Ordering</p>
            <h1 className="title">Premium T-shirt Designs for Every Mood</h1>
            <p className="subtitle">
              Curated styles for Marathi pride, gym motivation, and friendship vibes. Browse the
              collection and order instantly via WhatsApp.
            </p>

            <div className="hero-actions">
              <button className="hero-btn" onClick={scrollToBrowse}>
                Shop the drop
              </button>
              <button className="hero-btn-outline" onClick={scrollToBrowse}>
                View all styles
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img
                src={products[0].image}
                alt="Featured T-shirt"
              />
        </div>
      {/* 
                <div className="hero-image">
                  <div className="hero-product">
                    <img src="https://picsum.photos/500?shirt" alt="Featured T-shirt" />
                    
                    <div className="hero-product-info">
                      <p className="label">Featured</p>
                      <h3>Marathi Swag</h3>
                      <p className="price">₹299</p>
                    </div>
                  </div>
                </div> */}
        </header>

        <section id="browse-section" className="browse">
          <div className="browse-header">
            <p className="browse-label">NEW DROPS</p>

            <div className="browse-top">
              <h2>Explore Collections</h2>

              <p className="browse-subtext">
                Premium oversized graphics and statement pieces curated for every vibe.
              </p>
            </div>
          </div>

          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
          {selectedProduct && (
  <ProductModal
    product={selectedProduct}
    onClose={() => setSelectedProduct(null)}
  />
)}
        </section>

        <footer className="footer">
  <div className="footer-top">

    <div className="footer-brand">
      <div className="footer-logo">TS</div>

      <div>
        <h3>T-Shirt Brand</h3>

        <p>
          Premium oversized graphic T-shirts designed
          for every vibe.
        </p>
      </div>
    </div>

    <div className="footer-links">
      <h4>Collections</h4>

      <a href="#">Marathi</a>
      <a href="#">Gym</a>
      <a href="#">Friends</a>
    </div>

    <div className="footer-links">
      <h4>Connect</h4>

      <a href="https://wa.me/919172271693">
        WhatsApp
      </a>

      <a href="#">
        Instagram
      </a>

      <a href="#">
        Contact
      </a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 T-Shirt Brand. All rights reserved.</p>

    <p>Made with ❤️ in India</p>
  </div>
</footer>
      </div>
    </div>
  );
}

function NavBar({ onShopClick }) {
  return (
    <nav className="topbar">
      <div className="brand">
        <span className="brand-mark">TS</span>
        <div>
          <p className="brand-name">T-Shirt Brand</p>
          <p className="brand-subtitle">Wear your story</p>
        </div>
      </div>

      <div className="nav-links">
        <button type="button" className="nav-link" onClick={onShopClick}>
          Shop
        </button>
        <button type="button" className="nav-link" onClick={onShopClick}>
          Collections
        </button>
      </div>

      <button type="button" className="nav-action" onClick={onShopClick}>
        Order Now
      </button>
    </nav>
  );
}

export default App;