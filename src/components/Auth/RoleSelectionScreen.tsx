// src/components/Auth/RoleSelectionScreen.tsx
import React, { useState } from 'react';
import styles from './RoleSelectionScreen.module.css';

interface RoleSelectionScreenProps {
  onRoleSelected: (role: string) => void;
  onBackToLogin: () => void;
}

const RoleSelectionScreen: React.FC<RoleSelectionScreenProps> = ({ onRoleSelected, onBackToLogin }) => {
  // 1. Add state to track the selected role. 'Analyst' is the default.
  const [selectedRole, setSelectedRole] = useState<'Citizen' | 'Official' | 'Analyst'>('Analyst');

  return (
    <div className={styles.screenContainer}>
      <div className={styles.demoNavigation}>
        <button onClick={onBackToLogin} className={styles.navButton}>Login</button>
        <button className={`${styles.navButton} ${styles.activeNavButton}`}>Register</button>
      </div>

      <h1 className={styles.mainTitle}>Choose Your Role</h1>
      <p className={styles.subtitle}>
        Select your role to access the appropriate tools and features for coastal hazard management
      </p>

      <div className={styles.rolesGrid}>
        {/* Citizen Card */}
        <div 
          className={`${styles.roleCard} ${selectedRole === 'Citizen' ? styles.highlightedCard : ''}`}
          onClick={() => setSelectedRole('Citizen')} // Add click handler to update state
        >
          <div className={styles.roleIconContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.roleIcon}>
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Citizen</h3>
          <p className={styles.cardDescription}>
            Report hazards, access emergency services
          </p>
          <ul className={styles.keyFeaturesList}>
            <li>Report Hazards</li>
            <li>Submit SOS</li>
            <li>Track Family</li>
            <li>Make Donations</li>
            <li>Emergency Drills</li>
          </ul>
        </div>

        {/* Official Card */}
        <div 
          className={`${styles.roleCard} ${selectedRole === 'Official' ? styles.highlightedCard : ''}`}
          onClick={() => setSelectedRole('Official')} // Add click handler to update state
        >
          <div className={styles.roleIconContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.roleIcon}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Official</h3>
          <p className={styles.cardDescription}>
            Validate reports, manage emergency responses
          </p>
          <ul className={styles.keyFeaturesList}>
            <li>Validate Reports</li>
            <li>Manage Hotspots</li>
            <li>Emergency Response</li>
            <li>Resource Allocation</li>
          </ul>
        </div>

        {/* Analyst Card */}
        <div 
          className={`${styles.roleCard} ${selectedRole === 'Analyst' ? styles.highlightedCard : ''}`}
          onClick={() => setSelectedRole('Analyst')} // Add click handler to update state
        >
          <div className={styles.roleIconContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.roleIcon}>
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Analyst</h3>
          <p className={styles.cardDescription}>
            Monitor trends, analyze data insights
          </p>
          <ul className={styles.keyFeaturesList}>
            <li>Social Media Monitoring</li>
            <li>Trend Analysis</li>
            <li>Data Insights</li>
            <li>Generate Reports</li>
          </ul>
        </div>
      </div>

      <button className={styles.continueButton} onClick={() => onRoleSelected(selectedRole)}>
        Continue as
      </button>
    </div>
  );
};

export default RoleSelectionScreen;