
import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/Home.css';
const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h1>Movie Reservation System</h1>
        <ul>
          <li>
            <Link to="/movielistings">Movie Listings</Link>
          </li>
          <li>
            <Link to="/seatselection">Seat Selection</Link>
          </li>
          <li>
            <Link to="/reservationconfirmation">Reservation Confirmation</Link>
          </li>
          <li>
            <Link to="/userprofile">User Profile</Link>
          </li>
          <li>
            <Link to="/paymentgateway">Payment Gateway</Link>
          </li>
          <li>
            <Link to="/orderhistory">Order History</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Welcome to Movie Ticket Reservation System</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga consequatur magnam repellendus dicta. Perferendis facere corrupti fuga, consectetur corporis repellat!</p>
      </div>
    </div>
  );
};

export default Home;
