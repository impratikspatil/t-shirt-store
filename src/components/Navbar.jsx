import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ onShopClick, theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`topbar ${isScrolled ? "is-scrolled" : ""}`}>
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

      <div className="nav-right">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button type="button" className="nav-action" onClick={onShopClick}>
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
