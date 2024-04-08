import { Link } from 'react-router-dom'; 
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Category from '../components/settings/category';
import Difficulty from '../components/settings/difficulty';
import Info from '../components/settings/Info';
import { HomeIcon } from "@primer/octicons-react"; // custom icons
import './SettingPage.css'
import { useGlobalState } from '../GlobalState';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';


const SettingPage = () => {
    const { globalCategory, globalDifficulty, setGlobalCategory, setGlobalDifficulty } = useGlobalState(); //import usestate


    useEffect(() => {
      if(globalCategory != ''){
        toast(`Category has been changed to ${globalCategory}!`)
      }
    }, [globalCategory])

    useEffect(() => {
      if(globalDifficulty != ''){
        toast(`Difficulty has been changed to ${globalDifficulty}!`)
      }
    }, [globalDifficulty])

    const handleCategorySelect = (selectedCategory) => {
      setGlobalCategory(selectedCategory); //set global category
    };

    const handleDifficultySelect = (selectedDifficulty) => {
      setGlobalDifficulty(selectedDifficulty); //set global difficulty
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
         
        <div className='InfoButton'>
          <Info/>
        </div>  

        <h1 id="title">Settings</h1>

        <div className ='dropdowns'> 
          <Difficulty onSelectDifficulty={handleDifficultySelect}/>
          <Category onSelectCategory={handleCategorySelect}/>
        </div>

        <ToastContainer 
          position="bottom-right"
          theme="dark"
          draggable
          pauseOnHover
        />

    </div>
  )
}

export default SettingPage
