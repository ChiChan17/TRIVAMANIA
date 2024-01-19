import './HomePage.css'
import Answer from '../components/frontpage/Answer'
import Question from '../components/frontpage/Question'
import { Link } from 'react-router-dom'; 
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


function HomePage() {

  return (
    <div className = 'homepage'>

      <div id='button-container'>
          <Link to="/SettingPage">    
            <AwesomeButton id="settings-button" type="danger">
              Settings
            </AwesomeButton>
          </Link>
      </div>

      <Question/>
      <Answer/>
    </div>
  )
}

export default HomePage
