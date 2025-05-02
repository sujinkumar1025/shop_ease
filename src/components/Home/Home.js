import React, { useEffect, useState } from 'react';
import './Home.css';
import { getAllProducts } from '../../ApiService/api';
import { Link } from 'react-router-dom';

function Home() {
  
  // State to hold products data
  const [products, setProducts] = useState([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts(); // Get all products
      setProducts(data); // Update state with products
    };
    fetchProducts();
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div className="product-grid">
      {products.length > 0 ? (
        // Loop through products and display each one
        products.map((product) => (
          <div className="product" key={product.id}>
            {/* Displaying product image */}
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>
              <span className="price">${product.price}</span>
            </p>
            <Link to={`/product/${product.id}`}><button type="button" className="button">
              Product Details
            </button>
            </Link>
          </div>
        ))
      ) : (
        // If no products are available, show a loading message
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default Home;
