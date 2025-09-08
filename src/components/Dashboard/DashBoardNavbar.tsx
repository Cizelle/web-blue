// src/components/Dashboard/DashboardNavbar.tsx
import React, { useState } from 'react';
import styles from './DashBoardNavbar.module.css';
import HamburgerMenu from './HamburgerMenu'; // Make sure this component is created as per the previous response

const DashboardNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          {/* Hamburger Icon to toggle the menu */}
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            &#9776;
          </div>
          <div className={styles.logo}>
            <span className={styles.logoText}>CoastGuard</span>
          </div>
        </div>
        <div className={styles.navRight}>
          <ul className={styles.navList}>
            <li className={`${styles.navItem} ${styles.active}`}>
              <div className={styles.navIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="9"></rect>
                  <rect x="14" y="3" width="7" height="5"></rect>
                  <rect x="14" y="12" width="7" height="9"></rect>
                  <rect x="3" y="16" width="7" height="5"></rect>
                </svg>
              </div>
              <span className={styles.navText}>Dashboard</span>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 19.22H5C3.34 19.22 2 17.88 2 16.22V5.78C2 4.12 3.34 2.78 5 2.78H17C18.66 2.78 20 4.12 20 5.78V16.22C20 17.88 18.66 19.22 17 19.22Z"></path>
                  <path d="M22 19.22H21"></path>
                </svg>
              </div>
              <span className={styles.navText}>Family</span>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12" y2="16"></line>
                </svg>
              </div>
              <span className={styles.navText}>SOS</span>
              <span className={styles.badge}>!</span>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                  <path d="M5 5l2-2"></path>
                </svg>
              </div>
              <span className={styles.navText}>Offline</span>
            </li>
            <li className={styles.navItem}>
              <div className={styles.navIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                </svg>
              </div>
              <span className={styles.navText}>Profile</span>
            </li>
          </ul>
        </div>
      </nav>
      <HamburgerMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default DashboardNavbar;