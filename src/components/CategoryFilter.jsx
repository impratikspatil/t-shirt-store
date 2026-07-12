import React from "react";

const CategoryFilter = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="categories" role="tablist" aria-label="Filter by collection">
      {categories.map((category) => (
        <button
          key={category}
          role="tab"
          aria-selected={activeCategory === category}
          className={`category-btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
