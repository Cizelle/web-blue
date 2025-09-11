// src/components/settings/SettingsPage.tsx
import React from 'react';
import styles from './SettingsPage.module.css';

const SettingsPage: React.FC = () => {
    return (
        <div className={styles.mainContentArea}>
            <div className={styles.mainHeader}>
                <h1>App Settings</h1>
                <p>Customize your app experience and manage your security.</p>
            </div>
            
            <div className={styles.settingsContainer}>
                <div className={styles.scrollableContent}>
                    <div className={styles.section}>
                        <h2>Account & Security</h2>
                        <div className={styles.settingItem}>
                            <span className={styles.settingLabel}>Change Password</span>
                            <button className={styles.actionButton}>Change</button>
                        </div>
                        <div className={styles.settingItem}>
                            <span className={styles.settingLabel}>Two-Factor Authentication (2FA)</span>
                            <label className={styles.toggleSwitch}>
                                <input type="checkbox" />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>App Preferences</h2>
                        <div className={styles.settingItem}>
                            <span className={styles.settingLabel}>Theme</span>
                            <select className={styles.dropdown}>
                                <option>Light Mode</option>
                                <option>Dark Mode</option>
                            </select>
                        </div>
                        <div className={styles.settingItem}>
                            <span className={styles.settingLabel}>Language</span>
                            <select className={styles.dropdown}>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Privacy & Data</h2>
                        <div className={styles.settingItem}>
                            <span className={styles.settingLabel}>Location Sharing</span>
                            <label className={styles.toggleSwitch}>
                                <input type="checkbox" defaultChecked />
                                <span className={styles.slider}></span>
                            </label>
                        </div>
                        <div className={styles.settingItem}>
                            <span className={styles.settingLabel}>Export My Data</span>
                            <button className={styles.actionButton}>Download</button>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Danger Zone</h2>
                        <div className={styles.settingItem}>
                            <span className={styles.settingLabel}>Delete My Account</span>
                            <button className={`${styles.actionButton} ${styles.deleteButton}`}>Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;