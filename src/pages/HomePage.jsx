import './HomePage.css'
import Answer from '../components/frontpage/Answer'
import Question from '../components/frontpage/Question'
import { Link } from 'react-router-dom'; 
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { GearIcon } from "@primer/octicons-react"; // custom icons


const HomePage = () => {

  const handleAnswer = (onAnswerChange) => {
    console.log(`Answer: ${onAnswerChange}`);
  };

  return (
    <div className = 'homepage'>

      <div className='button-container'>
          <Link to="/SettingPage">    
            <AwesomeButton id="settings-button" type="danger">
              <GearIcon/>
              Settings
            </AwesomeButton>
          </Link>
      </div>

      <Question/>
      <Answer onAnswerChange={handleAnswer}/>
    </div>
  )
}

export default HomePage
