// src/components/Dashboard/HamburgerMenu.tsx
import React from 'react';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for a dark background effect when the menu is open */}
      <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`} onClick={onClose}></div>
      
      {/* The main menu container */}
      <div className={`${styles.menuContainer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.menuHeader}>
          <h2 className={styles.menuTitle}>Menu</h2>
          <span className={styles.closeIcon} onClick={onClose}>&times;</span>
        </div>
        <div className={styles.menuSubtitle}>Citizen Dashboard</div>
        
        <ul className={styles.menuList}>
          {/* Donations */}
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>Donations</div>
              <div className={styles.itemSubtitle}>Support disaster relief efforts</div>
            </div>
          </li>
          
          {/* Simulation Drills */}
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 17h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2"></path>
                <line x1="12" y1="17" x2="12" y2="17"></line>
              </svg>
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>Simulation Drills</div>
              <div className={styles.itemSubtitle}>Practice emergency procedures</div>
            </div>
          </li>
          
          {/* Resources */}
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>Resources</div>
              <div className={styles.itemSubtitle}>Shelters, guides & safety info</div>
            </div>
          </li>
          
          {/* All Reports */}
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>All Reports</div>
              <div className={styles.itemSubtitle}>View detailed reports & filters</div>
            </div>
          </li>
          
          {/* Missing Person Finder */}
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>Missing Person Finder</div>
              <div className={styles.itemSubtitle}>Report or find missing persons</div>
            </div>
          </li>
          
          {/* Settings */}
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83l-2.83 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0l-2.83-2.83a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83l2.83-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0l2.83 2.83a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82z"></path>
              </svg>
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>Settings</div>
              <div className={styles.itemSubtitle}>App preferences & security</div>
            </div>
          </li>
        </ul>

        <div className={styles.logoutSection}>
          {/* Logout */}
          <li className={styles.menuItem}>
            <div className={styles.itemIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </div>
            <div className={styles.itemText}>
              <div className={styles.itemTitle}>Logout</div>
              <div className={styles.itemSubtitle}>Sign out of your account</div>
            </div>
          </li>
        </div>

        <div className={styles.statusFooter}>
          <span className={styles.statusDot}></span> Online &bull; All services active
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;