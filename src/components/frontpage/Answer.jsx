import React, { useState } from 'react';
import './Answer.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

const Answer = ( {onAnswerChange} ) => {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('question').innerText = `Placeholder (User answer: ${answer || 'N/A'})`;
    onAnswerChange(answer)
  };

  return (
    <form className="answer-group" onSubmit={handleSubmit}>
      <input
        id="answer-box"
        type="text"
        placeholder="Type your answer here"
        value={answer}
        onChange={handleAnswerChange}
      />

      <AwesomeButton id="submit-button" type="primary">
        Submit
      </AwesomeButton>
    </form>
  );
};

export default Answer;
