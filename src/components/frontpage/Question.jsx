import React, { useEffect, useState } from 'react';
import './Question.css';
import { useGlobalState } from '../../GlobalState'; // Import global state hook
import axios from 'axios'; // Import axios library for making API requests
import arrayShuffle from 'array-shuffle';

const Question = () => {
  const { setGlobalCategory, setGlobalDifficulty, globalCategory, globalDifficulty, choices, setChoices, answer, setAnswer } = useGlobalState(); // Destructure global state and functions


  const [question, setQuestion] = useState(null); // State to store fetched question
  const [answerChoices, setAnswerChoices] = useState([]); //State to store array of possible answers
 

  //function to fetch a random question using partner's microservice
  const fetchQuestion = async () => {
    try {
      const response = await axios.get(`https://cs361-microservices-thanaphon-d7747a32c8c9.herokuapp.com/api/quiz/${globalCategory}/${globalDifficulty}`);
      setQuestion(response.data.question); // update state with fetched question
      setChoices(response.data.incorrect_answers); // update state with incorrect answers
      setAnswer(response.data.correct_answer); // update state with correct answer

      //Get answer choices in an array and shuffle answer choices to display
      const allChoices = [...response.data.incorrect_answers, response.data.correct_answer];
      setAnswerChoices(arrayShuffle(allChoices));
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  //set default categories
  useEffect(() => {
      if(globalCategory === '' || globalDifficulty === ''){
          setGlobalCategory('History')
          setGlobalDifficulty('easy')
      }
  }, [])

  useEffect(() => {
    // make API call to fetch question based on global category and difficulty
    fetchQuestion(); // call fetchQuestion function when globalCategory or globalDifficulty changes
  }, [globalCategory, globalDifficulty]); // dependencies for useEffect

  //const userAnswer = document.getElementById('answer-box')?.value || 'N/A';

  const handleSkipQuestion = () =>{
    fetchQuestion();
  };

  return (
    <div id='question-body'>
      <h1 id="question">
        Question: {question}
      </h1>

      

      <h3 id = 'answer-choices'>
        Choices: {answerChoices.join(', ')} 
      </h3>

      <div className='next-container'>
        <button id='skip-button' onClick={handleSkipQuestion}>
          Next Question
        </button>
      </div>

    </div>

  );
};

export default Question;
