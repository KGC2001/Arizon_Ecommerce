import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import CartPage from "./components/CartPage/CartPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Home page with Hero */}
        <Route path="/products" element={<ProductList />} /> {/* Product listing page */}
        <Route path="/fp" element={<FeaturedProducts />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
