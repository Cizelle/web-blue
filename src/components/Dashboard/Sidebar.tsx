// src/components/Dashboard/Sidebar.tsx
import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo and App Title Section */}
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>
          <span className={styles.logoText}>CoastGuard</span>
        </div>
      </div>

      {/* Main Navigation List */}
      <ul className={styles.navList}>
        {/* Dashboard */}
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

        {/* Family */}
        <li className={styles.navItem}>
          <div className={styles.navIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 19.22H5C3.34 19.22 2 17.88 2 16.22V5.78C2 4.12 3.34 2.78 5 2.78H17C18.66 2.78 20 4.12 20 5.78V16.22C20 17.88 18.66 19.22 17 19.22Z"></path>
              <path d="M22 19.22H21"></path>
            </svg>
          </div>
          <span className={styles.navText}>Family</span>
        </li>
        
        {/* SOS */}
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

        {/* Donations */}
        <li className={styles.navItem}>
          <div className={styles.navIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          <div className={styles.itemText}>
            <div className={styles.itemTitle}>Donations</div>
            <div className={styles.itemSubtitle}>Support disaster relief</div>
          </div>
        </li>
        
        {/* Simulation Drills */}
        <li className={styles.navItem}>
          <div className={styles.navIcon}>
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
        <li className={styles.navItem}>
          <div className={styles.navIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div className={styles.itemText}>
            <div className={styles.itemTitle}>Resources</div>
            <div className={styles.itemSubtitle}>Shelters, guides & safety info</div>
          </div>
        </li>

        {/* All Reports */}
        <li className={styles.navItem}>
          <div className={styles.navIcon}>
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
        <li className={styles.navItem}>
          <div className={styles.navIcon}>
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
      </ul>

      {/* Profile and Logout Section */}
      <div className={styles.bottomSection}>
        <li className={styles.navItem}>
          <div className={styles.navIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            </svg>
          </div>
          <span className={styles.navText}>Profile</span>
        </li>
        <li className={styles.navItem}>
          <div className={styles.navIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </div>
          <span className={styles.navText}>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;