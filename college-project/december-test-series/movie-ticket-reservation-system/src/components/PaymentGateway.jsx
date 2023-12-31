
import React, { useState } from 'react';
import '../assests/PaymentGateway.css'
const PaymentGateway = ({ cartItems, handlePayment }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cardNumber.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
      alert('Please enter all payment details');
      return;
    }
    
    handlePayment(cartItems);
  };

  return (
    <div>
      <h2>Payment Gateway</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentGateway;
