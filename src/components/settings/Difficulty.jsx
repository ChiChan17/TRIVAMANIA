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
        <h2 id="difficulty-title">Select a Difficulty</h2>

        <div className='select-difficulty'>
          <select id="difficulty" onChange={handleDifficultyChange} value={selectedDifficulty}>
            <option value="">Select a Difficulty</option>
            {difficuties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </div>

        <div id="submit-difficulty">
          <AwesomeButton id="submit" type = "primary">Submit</AwesomeButton>
        </div>   
           
        </form>
    </div>
  )
}

export default Difficulty
