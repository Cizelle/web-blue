// src/components/offline/OfflineDashboard.tsx
import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import styles from './OfflineDashboard.module.css';

const OfflineDashboard: React.FC = () => {
    // Dummy data for the user's device
    const myDeviceData = {
        name: 'Jane Doe',
        age: 32,
        role: 'Citizen',
        deviceId: 'DEV-A123',
        phone: '+91 98765 43210',
        battery: 85,
        latitude: 12.9716,
        longitude: 77.5946,
        signalStrength: 'Strong',
        networkStatus: 'Online', // Added for the new section
        networkType: '4G', // Added for the new section
    };

    // Dummy data for other nearby devices
    const receivedDeviceData = [
        { id: 1, name: 'John Doe', age: 35, role: 'Refugee', deviceId: 'DEV-B456', phone: '+91 91234 56789', battery: 60, latitude: 12.9800, longitude: 77.6000, signalStrength: 'Medium' },
        { id: 2, name: 'Sita', age: 28, role: 'Citizen', deviceId: 'DEV-C789', phone: '+91 87654 32109', battery: 92, latitude: 12.9750, longitude: 77.5900, signalStrength: 'Strong' },
        { id: 3, name: 'Misha', age: 41, role: 'Refugee', deviceId: 'DEV-D012', phone: '+91 99887 76655', battery: 25, latitude: 12.9650, longitude: 77.5850, signalStrength: 'Weak' },
    ];

    // Dummy state for communication method
    const [commMethod, setCommMethod] = useState('Wi-Fi Direct');

    // Dummy function to simulate switching communication methods
    const toggleCommMethod = () => {
        setCommMethod(prev => {
            switch (prev) {
                case 'Wi-Fi Direct': return 'Bluetooth';
                case 'Bluetooth': return 'SMS';
                case 'SMS': return 'Wi-Fi Direct';
                default: return 'Wi-Fi Direct';
            }
        });
    };

    const handleSosClick = () => {
        alert("SOS signal sent! Help is on the way.");
    };

    return (
        <div className={styles.appLayout}>
            <Sidebar />
            <div className={styles.mainContentArea}>
                <div className={styles.headerSection}>
                    <h1 className={styles.pageTitle}>Offline Mode Dashboard</h1>
                    <p className={styles.pageSubtitle}>Stay connected and share data in low-connectivity areas.</p>
                </div>

                <div className={styles.commStatus}>
                    <div className={styles.statusLabel}>Current Communication:</div>
                    <div className={styles.statusBadge}>{commMethod}</div>
                </div>
                
                <div className={styles.dashboardGrid}>
                    {/* New "Connection Status" card from image_d1e2d6.png */}
                    <div className={styles.connectionStatusCard}>
                        <div className={styles.cardHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2196f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                                <line x1="12" y1="18" x2="12.01" y2="18"></line>
                            </svg>
                            <h3 className={styles.cardTitle}>Connection Status</h3>
                        </div>
                        <div className={styles.connectionDetails}>
                            <div className={styles.connectionDot} style={{ backgroundColor: myDeviceData.networkStatus === 'Online' ? '#4CAF50' : '#f44336' }}></div>
                            <div className={styles.connectionInfo}>
                                <div className={styles.connectionNetwork}>Network Connected</div>
                                <div className={styles.connectionSignal}>{myDeviceData.networkType} • {myDeviceData.signalStrength} Signal</div>
                            </div>
                            <div className={styles.statusBadgeGreen}>{myDeviceData.networkStatus}</div>
                        </div>
                    </div>

                    {/* Received Device Data Section */}
                    <div className={styles.receivedDataCard}>
                        <h2 className={styles.cardTitle}>Received Data from Nearby Devices</h2>
                        <ul className={styles.receivedList}>
                            {receivedDeviceData.map(device => (
                                <li key={device.id} className={styles.receivedItem}>
                                    <div className={styles.itemHeader}>
                                        <span className={styles.itemName}>{device.name} ({device.age})</span>
                                        <span className={styles.roleBadge}>{device.role}</span>
                                    </div>
                                    <div className={styles.itemDetails}>
                                        <div className={styles.detailLine}>
                                            <span className={styles.detailLabel}>Device ID:</span> {device.deviceId}
                                        </div>
                                        <div className={styles.detailLine}>
                                            <span className={styles.detailLabel}>Battery:</span> {device.battery}%
                                        </div>
                                        <div className={styles.detailLine}>
                                            <span className={styles.detailLabel}>Signal:</span> {device.signalStrength}
                                        </div>
                                        <div className={styles.detailLine}>
                                            <span className={styles.detailLabel}>Location:</span> {device.latitude.toFixed(4)} / {device.longitude.toFixed(4)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>

                <br></br>

                                    {/* My Device Data Section */}
                    <div className={styles.myDeviceCard}>
                        <div className={styles.cardHeader}>
                            <h2 className={styles.cardTitle}>My Device Data</h2>
                            <span className={styles.roleBadge}>{myDeviceData.role}</span>
                        </div>
                        <div className={styles.dataGrid}>
                            <div className={styles.dataItem}>
                                <div className={styles.dataLabel}>Name</div>
                                <div className={styles.dataValue}>{myDeviceData.name} ({myDeviceData.age})</div>
                            </div>
                            <div className={styles.dataItem}>
                                <div className={styles.dataLabel}>Phone No.</div>
                                <div className={styles.dataValue}>{myDeviceData.phone}</div>
                            </div>
                            <div className={styles.dataItem}>
                                <div className={styles.dataLabel}>Device ID</div>
                                <div className={styles.dataValue}>{myDeviceData.deviceId}</div>
                            </div>
                            <div className={styles.dataItem}>
                                <div className={styles.dataLabel}>Battery</div>
                                <div className={styles.dataValue}>{myDeviceData.battery}%</div>
                            </div>
                            <div className={styles.dataItem}>
                                <div className={styles.dataLabel}>Signal</div>
                                <div className={styles.dataValue}>{myDeviceData.signalStrength}</div>
                            </div>
                            <div className={styles.dataItem}>
                                <div className={styles.dataLabel}>Location (Lat/Long)</div>
                                <div className={styles.dataValue}>
                                    {myDeviceData.latitude.toFixed(4)} / {myDeviceData.longitude.toFixed(4)}
                                </div>
                            </div>
                        </div>
                    </div>

                    <br></br>
                 {/* New "Emergency Communication" section from image_d1e297.png */}
                    <div className={styles.emergencyCommCard}>
                        <div className={styles.cardHeader}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f44336" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                <line x1="12" y1="9" x2="12" y2="13"></line>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <h3 className={styles.cardTitle}>Emergency Communication</h3>
                        </div>
                        <button className={styles.sosButton} onClick={handleSosClick}>SOS</button>
                    </div>
            </div>
        </div>
        
    );
};

export default OfflineDashboard;