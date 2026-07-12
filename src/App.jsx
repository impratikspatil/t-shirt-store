import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryFilter from "./components/CategoryFilter";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import useTheme from "./hooks/useTheme";
import "./App.css";

function App() {
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const scrollToBrowse = () => {
    document.getElementById("browse-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-shell">
      <Marquee />
      <div className="container">
        <Navbar onShopClick={scrollToBrowse} theme={theme} onToggleTheme={toggleTheme} />

        <Hero featuredImage={products[0].image} onShopClick={scrollToBrowse} />

        <section id="browse-section" className="browse">
          <div className="browse-header">
            <p className="browse-label">New drops</p>
            <div className="browse-top">
              <h2>Explore Collections</h2>
              <p className="browse-subtext">
                Premium oversized graphics and statement pieces curated for every vibe.
              </p>
            </div>
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <motion.div className="grid" layout>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedProduct && (
              <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
              />
            )}
          </AnimatePresence>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
