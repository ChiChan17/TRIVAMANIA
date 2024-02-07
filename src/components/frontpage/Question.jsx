import React, { useEffect, useState } from 'react';
import './Question.css';
import { useGlobalState } from '../../GlobalState'; // Import global state hook
import axios from 'axios'; // Import axios library for making API requests

const Question = () => {
  const { setGlobalCategory, setGlobalDifficulty, globalCategory, globalDifficulty } = useGlobalState(); // Destructure global state and functions

  // set default category and difficulty when component mounts
  useEffect(() => {
    setGlobalCategory('History'); // update global category
    setGlobalDifficulty('easy'); // update global difficulty
  }, []); 

  const [question, setQuestion] = useState(null); // State to store fetched question

  useEffect(() => {
    // make API call to fetch question based on global category and difficulty
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`https://cs361-microservices-thanaphon-d7747a32c8c9.herokuapp.com/api/quiz/${globalCategory}/${globalDifficulty}`);
        setQuestion(response.data.question); // update state with fetched question
        //console.log(response.data);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion(); // call fetchQuestion function when globalCategory or globalDifficulty changes
  }, [globalCategory, globalDifficulty]); // dependencies for useEffect

  const userAnswer = document.getElementById('answer-box')?.value || 'N/A';

  return (
    <div id='question-body'>
      <h1 id="question">
        Question: {question})
      </h1>
    </div>
  );
};

export default Question;
