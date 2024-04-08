import './HomePage.css'
import Answer from '../components/frontpage/Answer'
import Question from '../components/frontpage/Question'
import Instructions from '../components/frontpage/Instructions';
import { Link } from 'react-router-dom'; 
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { GearIcon } from "@primer/octicons-react"; // custom icons
import ParticlesBg from 'particles-bg';

const HomePage = () => {

  return (
    <div className = 'homepage'>
      <ParticlesBg color="#ff0000" type="square" bg={true} num={10}/>
      <div className='button-container'>
          <Link to="/SettingPage">    
            <AwesomeButton id="settings-button" type="danger">
              <GearIcon/>
              Settings
            </AwesomeButton>
          </Link>

      </div>

      <div className='InfoButton'>
          <Instructions/>
      </div>  

      <Question/>
      <Answer/>
    </div>
  )
}

export default HomePage
