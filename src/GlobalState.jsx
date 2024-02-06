// global variable file
import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalCategory, setGlobalCategory] = useState('');
  const [globalDifficulty, setGlobalDifficulty] = useState('');

  return (
    <GlobalStateContext.Provider
      value={{ 
        globalCategory, 
        setGlobalCategory, 
        globalDifficulty, 
        setGlobalDifficulty
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
