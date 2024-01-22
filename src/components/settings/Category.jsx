import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './Category.css'

const Category = ({ onSelectCategory }) => {

  const categories = ['History', 'Sports', 'Animals']; //categories
  const [selectedCategory, setSelectedCategory] = useState(''); //set the categories

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSelectCategory(selectedCategory);
    console.log(selectedCategory);
  };

  return (
    <div className="category-dropdown">
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Select a Category:</label>
        <select id="category" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">Select a category</option>
          {categories.map((category) => ( //sort through options from categories array
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <AwesomeButton id="submit" type = "primary">Submit</AwesomeButton>
      </form>
    </div>
  );
};

export default Category;
