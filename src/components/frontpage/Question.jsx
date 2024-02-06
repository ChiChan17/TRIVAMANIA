import React from 'react';
import './Question.css';
import { useGlobalState } from '../../GlobalState'; //get global state to fetch questions


const Question = () => {
  const{ globalCategory, globalDifficutly } = useGlobalState();

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
