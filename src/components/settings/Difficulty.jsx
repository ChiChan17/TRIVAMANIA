import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './Difficulty.css'

const Difficulty = ( {onSelectDifficulty} ) => {

  const difficuties = ['Easy', 'Medium', 'Hard']; //categories
  const [selectedDifficulty, setSelectedDifficulty] = useState(''); //set the categories

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSelectDifficulty(selectedDifficulty);
    console.log(selectedDifficulty);
  };

  return (
    <div className="difficulty-dropdown">
      <form onSubmit={handleSubmit}>
        <label htmlFor="difficulty">Select a Difficulty:</label>
        <select id="difficulty" onChange={handleDifficultyChange} value={selectedDifficulty}>
          <option value="">Select a Difficulty</option>
          {difficuties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
        <AwesomeButton id="submit" type = "primary">Submit</AwesomeButton>
      </form>
    </div>
  )
}

export default Difficulty
