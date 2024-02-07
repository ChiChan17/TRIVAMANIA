// global variable file
import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalCategory, setGlobalCategory] = useState('');
  const [globalDifficulty, setGlobalDifficulty] = useState('');
  const [choices, setChoices] = useState('');
  const [answer, setAnswer] = useState('');
  const [userAnswer, setUserAnswer] = useState('');


  return (
    <GlobalStateContext.Provider
      value={{ 
        globalCategory, 
        setGlobalCategory, 
        globalDifficulty, 
        setGlobalDifficulty,
        choices,
        setChoices,
        answer,
        setAnswer,
        userAnswer,
        setUserAnswer
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
