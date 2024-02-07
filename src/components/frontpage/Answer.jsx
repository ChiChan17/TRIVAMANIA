import React, { useState } from 'react';
import './Answer.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { useGlobalState } from '../../GlobalState';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


const Answer = () => {
  const { setUserAnswer, answer, score, setScore } = useGlobalState(); // Destructure global state and functions

  const correctAnswer = () => toast(
    "Correct! Please press next question to proceed!"
  );

  const incorrectAnswer = () => toast(
    "Incorrect! Please try again!"
  );

  const handleSubmit = (event) => {
      event.preventDefault();
      const userAnswer = document.getElementById('answer-box')?.value || 'N/A';
      setUserAnswer(userAnswer);
      console.log(userAnswer);
      if(userAnswer.toLowerCase() === answer.toLowerCase()){
        console.log("correct");
        setScore(score + 1);
        correctAnswer();
      } else{
        incorrectAnswer();
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

        <ToastContainer 
          position="bottom-right"
          theme="dark"
          draggable
          pauseOnHover
        />

        <p id="score">Score: {score}</p>
      </div>

    </form>
  );
};

export default Answer;
