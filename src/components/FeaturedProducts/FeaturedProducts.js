import React from "react";
import "./FeaturedProducts.css";

const products = [
  { id: 1, name: "T-Shirt", price: "$25", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Shoes", price: "$80", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Bag", price: "$45", image: "https://via.placeholder.com/150" },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>{prod.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
