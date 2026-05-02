import React, { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const [activeCategory, setActiveCategory] = useState("All");

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
            src="https://picsum.photos/600/700?fashion"
            alt="T-shirt showcase"
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
            <div>
              <h2>Explore by category</h2>
              <p className="browse-copy">
                Discover designs crafted for your vibe.
              </p>
            </div>
            <div className="product-count">{filteredProducts.length} designs</div>
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
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
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