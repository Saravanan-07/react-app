
import React, { useState } from 'react';

const QuizCreator = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', ''],
    correctAnswer: '',
  });

  const addQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      options: ['', '', ''],
      correctAnswer: '',
    });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: updatedOptions });
  };

  const handleCorrectAnswerChange = (value) => {
    setCurrentQuestion({ ...currentQuestion, correctAnswer: value });
  };

  return (
    <div>
      <h2>Quiz Creator</h2>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={currentQuestion.question}
          onChange={(e) => setCurrentQuestion({ ...currentQuestion, question: e.target.value })}
        />
      </div>

      <div>
        <label>Options:</label>
        {currentQuestion.options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
      </div>

      <div>
        <label>Correct Answer:</label>
        <select
          value={currentQuestion.correctAnswer}
          onChange={(e) => handleCorrectAnswerChange(e.target.value)}
        >
          {currentQuestion.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button onClick={addQuestion}>Add Question</button>

      <div>
        <h3>Created Questions:</h3>
        <ul>
          {questions.map((q, index) => (
            <li key={index}>
              <strong>{`Question ${index + 1}:`}</strong> {q.question} - Correct Answer: {q.correctAnswer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuizCreator;
