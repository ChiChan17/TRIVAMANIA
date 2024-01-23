import React, { useState } from 'react';
import './Answer.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { TrashIcon, GearIcon } from "@primer/octicons-react"; // custom icons

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


      <div className='submit-container'>
        <AwesomeButton id="submit-button" type="primary">
          Submit
        </AwesomeButton>
      </div>

      <div className='skip-container'>
        <AwesomeButton id="skip" type="secondary" >
          <TrashIcon/>
          Skip Question
        </AwesomeButton>
      </div>
    </form>
  );
};

export default Answer;
