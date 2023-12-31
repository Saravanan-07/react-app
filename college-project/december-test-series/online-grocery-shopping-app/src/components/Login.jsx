// Login.js
import React, { useState } from 'react';
import '../assests/Login.css'
const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation (you can enhance this as needed)
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
      return;
    }
    // Simulating a login request (replace with your authentication logic)
    // For a real app, you would typically use an authentication service or API
    handleLogin(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
