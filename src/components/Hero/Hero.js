import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Style with background image/text

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Stylish & Modern</h1>
        <p>Explore our latest collection</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
