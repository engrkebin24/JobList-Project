import React, { useState } from "react";
import beaver from "../../../assets/beaver.png";
import styles from "./UserProfile.module.css";

// Placeholder component for a User Profile dropdown menu

export default function UserProfileMenu() {
  // State to manage the dropdown menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      {/* Placeholder component for the logged in User's Avatar*/}
      <img
        className={styles.userProfileImage}
        src={beaver}
        alt="Menu"
        onClick={toggleDropdown}
      />

      {/* Conditionally render the dropdown menu */}
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li>
            <a>User: Tradie McGrady</a>
          </li>
          <li>
            <a> Settings</a>
          </li>
          <li>
            <a> Notifications</a>
          </li>
        </ul>
      )}
    </div>
  );
}
