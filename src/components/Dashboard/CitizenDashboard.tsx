// src/components/Dashboard/CitizenDashboard.tsx
import React, { useEffect } from 'react';
import styles from './CitizenDashboard.module.css';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const CitizenDashboard: React.FC = () => {
    const navigate = useNavigate();

    // Click handler for the Report Hazard card
    const handleReportHazardClick = () => {
        navigate('/report-hazard');
    };

    // Click handler for the Donate card
    const handleDonateClick = () => {
        navigate('/campaigns');
    };
    
    // Click handler for the Track Family card
    const handleFamilyClick = () => {
        navigate('/family');
    };

    // Click handler for the Offline Mode card
    const handleOfflineModeClick = () => {
        navigate('/offline');
    };

    // Use a useEffect hook for side effects, like fetching data on mount
    useEffect(() => {
        // You can add data fetching or other side effects here.
        console.log("CitizenDashboard component mounted.");
    }, []);

    return (
        <div className={styles.appLayout}>
            <Sidebar />
            <div className={styles.mainContentArea}>
                
                {/* Top welcome banner */}
                <div className={styles.welcomeBanner}>
                    <div className={styles.welcomeTitle}>Welcome back!</div>
                    <div className={styles.welcomeSubtitle}>Stay safe and help your community by reporting hazards</div>
                    <div className={styles.statusSection}>
                        <span className={styles.statusBadge}>Status: Active</span>
                        <span className={styles.reportsBadge}>12 Reports this month</span>
                    </div>
                </div>

                {/* Main content grid */}
                <div className={styles.contentGrid}>
                    <div className={styles.featuresGrid}>
                        {/* Report Hazard Card */}
                        <div className={styles.featureCard} onClick={handleReportHazardClick}>
                            <div className={styles.cardIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </div>
                            <div className={styles.cardTitle}>Report Hazard</div>
                            <div className={styles.cardSubtitle}>Submit new report</div>
                        </div>

                        {/* Donate Card */}
                        <div className={styles.featureCard} onClick={handleDonateClick}>
                            <div className={styles.cardIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </div>
                            <div className={styles.cardTitle}>Donate</div>
                            <div className={styles.cardSubtitle}>Help victims</div>
                        </div>
                        
                        {/* Track Family Card */}
                        <div className={styles.featureCard} onClick={handleFamilyClick}>
                            <div className={styles.cardIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 19.22H5C3.34 19.22 2 17.88 2 16.22V5.78C2 4.12 3.34 2.78 5 2.78H17C18.66 2.78 20 4.12 20 5.78V16.22C20 17.88 18.66 19.22 17 19.22Z"></path>
                                    <path d="M22 19.22H21"></path>
                                </svg>
                            </div>
                            <div className={styles.cardTitle}>Track Family</div>
                            <div className={styles.cardSubtitle}>Find loved ones</div>
                        </div>

                       {/* Offline Mode Card */}
                        <div className={styles.featureCard} onClick={handleOfflineModeClick}>
                            <div className={styles.cardIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9e9e9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                    <path d="M5 5l2-2"></path>
                                </svg>
                            </div>
                            <div className={styles.cardTitle}>Offline Mode</div>
                            <div className={styles.cardSubtitle}>Emergency backup</div>
                        </div>
                    </div>

                    <div className={styles.nearbyActivityCard}>
                        <div className={styles.cardTitle}>Nearby Activity</div>
                        <div className={styles.interactiveMap}>
                            <p>Interactive Map Placeholder</p>
                        </div>
                        <ul className={styles.activityList}>
                            <li>
                                <span className={styles.activityDot} style={{ backgroundColor: '#f44336' }}></span>
                                High Wave Warning
                                <span className={styles.distance}>1.2 km</span>
                            </li>
                            <li>
                                <span className={styles.activityDot} style={{ backgroundColor: '#4CAF50' }}></span>
                                Shelter Available
                                <span className={styles.distance}>0.8 km</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div className={styles.myReportsCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}>My Recent Reports</div>
                            <button className={styles.newReportButton}>
                                + New
                            </button>
                        </div>
                        <div className={styles.reportItem}>
                            <span className={styles.reportIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </span>
                            <div className={styles.reportDetails}>
                                <div className={styles.reportTitle}>High Waves</div>
                                <div className={styles.reportSubtitle}>Marina Beach</div>
                            </div>
                            <span className={styles.reportStatusVerified}>Verified</span>
                        </div>
                        <div className={styles.reportItem}>
                            <span className={styles.reportIcon}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                            </span>
                            <div className={styles.reportDetails}>
                                <div className={styles.reportTitle}>Flooding</div>
                                <div className={styles.reportSubtitle}>ECR Road</div>
                            </div>
                            <span className={styles.reportStatusPending}>Pending</span>
                        </div>
                        <div className={styles.viewAllReports}>View All Reports</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CitizenDashboard;