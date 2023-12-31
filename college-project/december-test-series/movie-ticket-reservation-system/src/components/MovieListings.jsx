
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assests/MovieListings.css'; 

const MovieListings = () => {
 
  const [movies, setMovies] = useState([]);

 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/horizon-code-academy/fake-movies-api/main/db.json');
        const data = await response.json();

      
        setMovies(data.movies);
      } catch (error) {
        console.error('Error fetching movie listings:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-listings-container">
      <h2>Movie Listings</h2>
     
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Rating: {movie.rating}</p>
          </li>
        ))}
      </ul>
      <Link to="/seatselection" className="select-seats-link">
        Select Seats
      </Link>
    </div>
  );
};

export default MovieListings;
