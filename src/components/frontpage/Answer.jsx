import React, { useState } from 'react';
import './Answer.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { useGlobalState, GlobalStateProvider } from '../../GlobalState';

const Answer = () => {
  const { userAnswer, setUserAnswer, answer, setAnswer} = useGlobalState(); // Destructure global state and functions

  const handleSubmit = (event) => {
      event.preventDefault();
      const userAnswer = document.getElementById('answer-box')?.value || 'N/A';
      setUserAnswer(userAnswer);
      console.log(userAnswer);
      if(userAnswer.toLowerCase() === answer.toLowerCase()){
        console.log("correct");
    }
  }

  return (
    <form className="answer-group" onSubmit={handleSubmit}>
      <input
        id="answer-box"
        type="text"
        placeholder="Type your answer here"
      />


      <div className='submit-container'>
        <AwesomeButton id="submit-button" type="primary" onPress={handleSubmit}>
          Submit
        </AwesomeButton>
      </div>

    </form>
  );
};

export default Answer;
