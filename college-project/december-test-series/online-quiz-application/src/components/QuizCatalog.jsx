
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assests/QuizCatalog.css'; 

const QuizCatalog = () => {
  const [quizCategories, setQuizCategories] = useState([]);

  useEffect(() => {
   
    const dummyCategories = ['Science', 'History', 'General Knowledge'];
    setQuizCategories(dummyCategories);
  }, []);

  return (
    <div className="container">
      <h2>Quiz Catalog</h2>
      <p>Select a quiz category to explore:</p>

      <ul>
        {quizCategories.map((category, index) => (
          <li key={index}>
            <Link to={`/quiz/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizCatalog;
