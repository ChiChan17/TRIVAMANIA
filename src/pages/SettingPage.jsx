import { Link } from 'react-router-dom'; 
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Category from '../components/settings/category';
import Difficulty from '../components/settings/difficulty';
import { HomeIcon } from "@primer/octicons-react"; // custom icons
import './SettingPage.css'

const SettingPage = () => {

    const handleCategorySelect = (selectedCategory) => {
      console.log(`Selected category: ${selectedCategory}`);
    };

    const handleDifficultySelect = (selectedDifficulty) => {
      console.log(`Selected category: ${selectedDifficulty}`);
    };
  return (
    <div className = 'SettingPage'>
 
        <div className='HomepageButton'>       
          
            <Link to='/'>
                <AwesomeButton id='homebutton' type='danger'>
                    <HomeIcon/>
                    Homepage
                </AwesomeButton>
            </Link>
            
        </div>        
        
        <h1 id="title">Settings</h1>

        <div className ='dropdowns'> 
          <Difficulty onSelectDifficulty={handleDifficultySelect}/>
          <Category onSelectCategory={handleCategorySelect}/>
        </div>

    </div>
  )
}

export default SettingPage
