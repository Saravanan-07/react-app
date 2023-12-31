// ProductList.js
import React, { useState, useEffect } from 'react';
import '../assests/ProductList.css'
const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product information from a public API (replace the URL with your actual API)
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => {
        // Modify this according to the actual structure of the API response
        setProducts(data || []);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='pdiv'>
      <h2>Product List</h2>
      <ul className='pul'>
        {products.map((product) => (
          <li className='pli' key={product.id}>
            {product.title} - ${product.price}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
