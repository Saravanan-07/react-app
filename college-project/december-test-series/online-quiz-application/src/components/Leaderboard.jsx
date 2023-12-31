
import React, { useState, useEffect } from 'react';
import '../assests/Leaderboard.css'
const Leaderboard = () => {
  
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    
    const dummyData = [
      { username: 'User1', score: 90 },
      { username: 'User2', score: 85 },
      { username: 'User3', score: 78 },
      
    ];

    setLeaderboardData(dummyData);
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
