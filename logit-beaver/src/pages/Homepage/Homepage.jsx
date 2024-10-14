import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/BeaverLogo.svg';
import styles from './Homepage.module.css';

export default function Homepage() {

    // Navigate hook to navigate to the Jobs Page
    const navigate = useNavigate();

    // Function to handle the clicking of the Log In button
    const handleClick = () => {
      navigate('/jobs-page');
    };

  return (
    <div className={styles.homepageContainer}>
       {/* App Logo container */}
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Beaver Logo" />
      </div>

      {/* App name and buttons container */}
      <div className={styles.appNameAndButtonsContainer}>
         {/* App name and tagline */}
        <div className={styles.appNameContainer}>
            <h1>LogIt Beaver</h1>
            <p>Logging tasks like a busy beaver!</p>
        </div>
        
         {/* Buttons for logging in and joining */}
        <div className={styles.homepageButtonsContainer}>
          <button onClick={handleClick}>Log In</button>
           {/* Placeholder button for Sign Up feature*/}
          <button>Join the Lodge</button>
        </div>
      </div>
   

     
    </div>
  );
}