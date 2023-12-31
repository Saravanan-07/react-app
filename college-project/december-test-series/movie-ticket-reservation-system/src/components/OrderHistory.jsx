
import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
      
        const response = await fetch('https://api.example.com/order-history');
        const data = await response.json();

     
        setOrderHistory(data.orders);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      <ul>
        {orderHistory.map((order) => (
          <li key={order.id}>
            <p>Reservation ID: {order.id}</p>
            <p>Movie: {order.movieTitle}</p>
            <p>Showtime: {order.showtime}</p>
            <p>Seats: {order.seats.join(', ')}</p>
            <p>Total Cost: ${order.totalCost}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
