
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const QuizTaker = () => {
  const { category } = useParams();
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
   
    const dummyQuizData = [
      { question: 'Question 1?', options: ['Option A', 'Option B', 'Option C'], correctAnswer: 'Option A' },
      { question: 'Question 2?', options: ['Option X', 'Option Y', 'Option Z'], correctAnswer: 'Option Z' },
      
    ];

    setQuizData(dummyQuizData);
  }, [category]);



  return (
    <div className="container">
      <h2>{`Quiz - ${category}`}</h2>
      
      <ul>
        {quizData.map((question, index) => (
          <li key={index}>
            <p>{question.question}</p>
            <ul>
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizTaker;
