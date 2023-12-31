
import React from 'react';
import { Link } from 'react-router-dom';
import '../assests/ReservationConfirmation.css'; 

const ReservationConfirmation = ({ selectedSeats }) => {
  return (
    <div className="confirmation-container">
      <h2>Reservation Confirmation</h2>
      <p>Your reservation is confirmed!</p>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <Link to="/movielistings" className="back-to-listings-link">
        Back to Movie Listings
      </Link>
    </div>
  );
};

export default ReservationConfirmation;
