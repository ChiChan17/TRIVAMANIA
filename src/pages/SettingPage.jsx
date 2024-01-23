import { Link } from 'react-router-dom'; 
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Category from '../components/settings/category';
import Difficulty from '../components/settings/difficulty';
import { HomeIcon } from "@primer/octicons-react"; // custom icons


const SettingPage = () => {

    const handleCategorySelect = (selectedCategory) => {
      console.log(`Selected category: ${selectedCategory}`);
    };

    const handleDifficultySelect = (selectedDifficulty) => {
      console.log(`Selected category: ${selectedDifficulty}`);
    };
  return (
    <div className = 'SettingPage'>

        <div id='HomepageButton'>
            <Link to='/'>
                <AwesomeButton id='homebutton' type='danger'>
                    <HomeIcon/>
                    Homepage
                </AwesomeButton>
            </Link>
        </div>        

        <div id ='DropDowns'> 
          <Difficulty onSelectDifficulty={handleDifficultySelect}/>
          <Category onSelectCategory={handleCategorySelect}/>
        </div>

    </div>
  )
}

export default SettingPage
