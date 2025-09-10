// src/components/sos/SOSScreen.tsx
import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import styles from './SOSScreen.module.css';

const SOSScreen: React.FC = () => {
    const handleSosClick = () => {
        // Here you would implement the logic to send an SOS signal
        // This could involve sending an SMS, a notification, or an API call
        // For now, we'll use a simple alert.
        alert("SOS signal sent! Help is on the way.");
    };

    return (
        <div className={styles.appLayout}>
            <Sidebar />
            <div className={styles.mainContentArea}>
                <div className={styles.sosContainer}>
                    <h1 className={styles.sosTitle}>Emergency SOS</h1>
                    <p className={styles.sosSubtitle}>Press the button below to send an immediate alert to the authorities and your emergency contacts.</p>
                    
                    <button className={styles.sosButton} onClick={handleSosClick}>SOS</button>

                    <div className={styles.instructions}>
                        <div className={styles.instructionItem}>
                            <h3 className={styles.instructionTitle}>How SOS Works</h3>
                            <p className={styles.instructionText}>
                                When you press the SOS button, your phone's location, medical information, and a distress signal will be sent to emergency services and your registered family members.
                                This works even in low-signal areas by attempting to use SMS or other available communication methods.
                            </p>
                        </div>
                        <div className={styles.instructionItem}>
                            <h3 className={styles.instructionTitle}>Stay Calm</h3>
                            <p className={styles.instructionText}>
                                After pressing the button, remain calm and stay in your current location if it is safe to do so. The system will continue to update your location.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SOSScreen;