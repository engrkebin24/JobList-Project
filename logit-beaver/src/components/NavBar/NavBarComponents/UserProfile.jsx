import React, { useState } from "react";
import beaver from "../../../assets/beaver.png";
import styles from "./UserProfile.module.css";

export default function UserProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className={styles.dropdown}>
      {/* The image that triggers the dropdown */}
      <img
        className={styles.userProfileImage} 
        src={beaver}
        alt="Menu"
        onClick={toggleDropdown}
      />

      {/* Conditionally render the dropdown menu */}
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li><a>User: Tradie McGrady</a></li>
          <li><a>  Settings</a></li>
          <li><a>  Notifications</a></li>
        </ul>
      )}
    </div>
  );
}