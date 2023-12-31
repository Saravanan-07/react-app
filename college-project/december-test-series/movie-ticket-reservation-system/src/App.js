
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieListings from './components/MovieListings';
import SeatSelection from './components/SeatSelection.jsx';
import ReservationConfirmation from './components/ReservationConfirmation';
import UserProfile from './components/UserProfile';
import PaymentGateway from './components/PaymentGateway';
import OrderHistory from './components/OrderHistory';
import Login from './components/Login';

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  return (

    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        
        <Route
              path="/movielistings"
              element={<MovieListings />}
            />
            <Route
              path="/seatselection"
              element={<SeatSelection setSelectedSeats={setSelectedSeats} />}
            />
            <Route
              path="/reservationconfirmation"
              element={<ReservationConfirmation selectedSeats={selectedSeats} />}
          />
        <Route path="/userprofile" element={<UserProfile/>} />
        <Route path="/paymentgateway" element={<PaymentGateway/>} />
        <Route path="/orderhistory" element={<OrderHistory/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );

};

export default App;
