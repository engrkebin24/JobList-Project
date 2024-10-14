import Logo from "../../assets/BeaverLogo.svg";
import UserProfile from "./NavBarComponents/UserProfile";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoAndAppName}>
        <img className={styles.navBarLogo} src={Logo} alt="Beaver Logo" />
        <h1 className={styles.navBarAppName}>LogIt Beaver</h1>
      </div>

      <div className={styles.navLinks}>
        <a>Customers</a>
        <a>Jobs</a>
        <a>Reports</a>
        <a>Help</a>
      </div>

      <div className={styles.userProfile}>
        <UserProfile />
      </div>
    </div>
  );
}
