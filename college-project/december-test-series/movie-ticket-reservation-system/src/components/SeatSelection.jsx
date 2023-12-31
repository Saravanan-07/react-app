
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assests/SeatSelection.css';

const SeatSelection = () => {
 
  const [selectedSeats, setSelectedSeats] = useState([]);

  
  const handleSeatClick = (seat) => {
   
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        
        return prevSelectedSeats.filter((selectedSeat) => selectedSeat !== seat);
      } else {
        
        return [...prevSelectedSeats, seat];
      }
    });
  };

  
  const rows = ['A', 'B', 'C', 'D'];
  const seatsPerRow = 6;

  return (
    <div className="seat-selection-container">
      <h2>Seat Selection</h2>
      <p>Select your seats:</p>
      <div className="seating-grid">
        {rows.map((row) => (
          <div key={row} className="row">
            {Array.from({ length: seatsPerRow }, (_, index) => index + 1).map((seatNumber) => {
              const seat = `${row}${seatNumber}`;
              const isSeatSelected = selectedSeats.includes(seat);

              return (
                <button
                  key={seat}
                  className={isSeatSelected ? 'selected' : ''}
                  onClick={() => handleSeatClick(seat)}
                >
                  {seat}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <Link to="/reservationconfirmation" className="confirm-reservation-link">
        Confirm Reservation
      </Link>
    </div>
  );
};

export default SeatSelection;
