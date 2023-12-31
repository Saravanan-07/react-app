import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QuizCatalog from './components/QuizCatalog';
import QuizCreator from './components/QuizCreator';
import QuizTaker from './components/QuizTaker';
import Leaderboard from './components/Leaderboard';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/quizzes" element={<QuizCatalog/>} />
        <Route path="/create" element={<QuizCreator/>} />
        <Route path="/quiz/:id" element={<QuizTaker/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
