import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { CartContext } from "../../context/CartContext";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="product-list">
      <h2>All Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
        />

        <div className="product-grid">
        {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title.length > 40 ? product.title.slice(0, 40) + "..." : product.title}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <button className="add-cart" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        ))}
        </div>

    </section>
  );
}

export default ProductList;
