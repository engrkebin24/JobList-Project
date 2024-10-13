import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/BeaverLogo.svg';
import styles from './Homepage.module.css';

export default function Homepage() {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/jobs-page');
    };

  return (
    <div className={styles.homepageContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Beaver Logo" />
      </div>

      <div className={styles.appNameAndButtonsContainer}>

        <div className={styles.appNameContainer}>
            <h1>LogIt Beaver</h1>
            <p>Logging tasks like a busy beaver!</p>
        </div>
        
        <div className={styles.homepageButtonsContainer}>
          <button onClick={handleClick}>Log In</button>
          <button>Join the Lodge</button>
        </div>
      </div>
   

     
    </div>
  );
}