import { Link } from 'react-router-dom'; 
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


function SettingPage() {

  return (
    <div className = 'SettingPage'>
        <div id='HomepageButton'>
            <Link to='HomePage'>
                <AwesomeButton id='homebutton' type='danger'>
                    Homepage
                </AwesomeButton>
            </Link>
        </div>
    </div>
  )
}

export default SettingPage
