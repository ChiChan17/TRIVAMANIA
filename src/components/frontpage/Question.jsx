import React from 'react';
import './Question.css';

const Question = () => {
  
  const userAnswer = document.getElementById('answer-box')?.value || 'N/A';

  return (
    <h1 id="question">
      Placeholder (User answer: {userAnswer})
    </h1>
  );
};

export default Question;
