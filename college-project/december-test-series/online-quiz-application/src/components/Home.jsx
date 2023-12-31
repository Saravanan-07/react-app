
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Online Quiz App</h1>
      <p>Test your knowledge and challenge yourself with a variety of quizzes.</p>
      
      <div>
        <Link to="/quizzes">
          <button>Explore Quizzes</button>
        </Link>
      </div>

      <div>
        <Link to="/create">
          <button>Create a Quiz</button>
        </Link>
      </div>

      <div>
        <Link to="/leaderboard">
          <button>Leaderboard</button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
