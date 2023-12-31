// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import PaymentGateway from './components/PaymentGateway';
import './App.css'; // Import the styles

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/product-list">Product List</Link>
            </li>
            <li>
              <Link to="/shopping-cart">Shopping Cart</Link>
            </li>
            <li>
              <Link to="/payment-gateway">Payment Gateway</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-list" element={<ProductList addToCart={addToCart} />} />
          <Route path="/shopping-cart" element={<ShoppingCart cartItems={cartItems} />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h2>Welcome to our Online Grocery Shopping Website!</h2>;
};

export default App;
