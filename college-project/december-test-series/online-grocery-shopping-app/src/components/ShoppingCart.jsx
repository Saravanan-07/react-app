
import React from 'react';
import '../assests/ShoppingCart.css'
const ShoppingCart = ({ cartItems }) => {
  return (
    <div className='sdiv'>
      <h2>Shopping Cart</h2>
      <ul className='sul'>
        {cartItems.map((item) => (
          <li className='sli' key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
