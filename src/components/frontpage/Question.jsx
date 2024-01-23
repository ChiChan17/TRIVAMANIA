import React from 'react';
import './Question.css';

const Question = () => {
  
  const userAnswer = document.getElementById('answer-box')?.value || 'N/A';

  return (

    <div id='question-body'>
      <h1 id="question">
        Placeholder (User answer: {userAnswer})
      </h1>
    </div>
    
  );
};

export default Question;
