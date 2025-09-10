// src/components/family/FamilyTracker.tsx
import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import styles from './FamilyTracker.module.css';

const FamilyTracker: React.FC = () => {
    // Dummy data for family members
    const dummyFamilyMembers = [
        { id: 1, name: 'John Doe', status: 'safe', lastLocation: 'Sector 14, Gurugram', deviceId: 'DEV-A123', profilePic: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Jane Doe', status: 'at-risk', lastLocation: 'Cyber Hub, Gurugram', deviceId: 'DEV-B456', profilePic: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Jim Doe', status: 'missing', lastLocation: 'Unknown', deviceId: 'DEV-C789', profilePic: 'https://via.placeholder.com/100' },
    ];

    const [familyMembers, setFamilyMembers] = useState(dummyFamilyMembers);
    const [filter, setFilter] = useState('all');

    const filteredMembers = familyMembers.filter(member => {
        if (filter === 'all') {
            return true;
        }
        return member.status === filter;
    });

    const safeCount = familyMembers.filter(m => m.status === 'safe').length;
    const atRiskCount = familyMembers.filter(m => m.status === 'at-risk').length;
    const missingCount = familyMembers.filter(m => m.status === 'missing').length;

    const handleAddMember = () => {
        alert('Add Member functionality not yet implemented.');
    };

    const handleSendAlert = () => {
        alert('Alert sent to all family members!');
    };

    const handleReportMissing = () => {
        alert('Report Missing functionality not yet implemented.');
    };

    return (
        <div className={styles.appLayout}>
            <Sidebar />
            <div className={styles.mainContentArea}>
                <div className={styles.headerSection}>
                    <div className={styles.headerText}>
                        <h1 className={styles.pageTitle}>Family Tracker</h1>
                        <p className={styles.pageSubtitle}>Keep your loved ones safe</p>
                    </div>
                    <button className={styles.addButton} onClick={handleAddMember}>
                        {familyMembers.length > 0 ? '+ Add Member' : 'Join Family'}
                    </button>
                </div>

                <div className={styles.mapSection}>
                    <h2 className={styles.mapTitle}>Family Location Map</h2>
                    <div className={styles.mapPlaceholder}>
                        {/* Placeholder for the map */}
                        Map functionality will be added here.
                    </div>
                </div>

                <div className={styles.statusCards}>
                    <div className={styles.statusCard}>
                        <div className={styles.statusCount}>{safeCount}</div>
                        <div className={styles.statusLabel}>Safe</div>
                    </div>
                    <div className={styles.statusCard}>
                        <div className={styles.statusCount}>{atRiskCount}</div>
                        <div className={styles.statusLabel}>At Risk</div>
                    </div>
                    <div className={styles.statusCard}>
                        <div className={styles.statusCount}>{missingCount}</div>
                        <div className={styles.statusLabel}>Missing</div>
                    </div>
                </div>

                <div className={styles.searchFilterSection}>
                    <div className={styles.searchBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="text" placeholder="Search family members..." className={styles.searchInput} />
                    </div>
                    <div className={styles.filters}>
                        <button className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`} onClick={() => setFilter('all')}>All</button>
                        <button className={`${styles.filterButton} ${filter === 'safe' ? styles.active : ''}`} onClick={() => setFilter('safe')}>Safe</button>
                        <button className={`${styles.filterButton} ${filter === 'at-risk' ? styles.active : ''}`} onClick={() => setFilter('at-risk')}>At Risk</button>
                        <button className={`${styles.filterButton} ${filter === 'missing' ? styles.active : ''}`} onClick={() => setFilter('missing')}>Missing</button>
                    </div>
                </div>

                <div className={styles.familyMembersList}>
                    {filteredMembers.length > 0 ? (
                        filteredMembers.map(member => (
                            <div key={member.id} className={styles.memberCard}>
                                <img src={member.profilePic} alt={member.name} className={styles.profilePic} />
                                <div className={styles.memberDetails}>
                                    <div className={styles.memberName}>{member.name}</div>
                                    <div className={styles.memberStatus}>
                                        <span className={`${styles.statusDot} ${styles[member.status]}`}></span>
                                        {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
                                    </div>
                                    <div className={styles.memberInfo}>
                                        <div className={styles.lastLocation}>Last seen: {member.lastLocation}</div>
                                        <div className={styles.deviceId}>Device ID: {member.deviceId}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles.noMembers}>No family members found.</div>
                    )}
                </div>
                
                <div className={styles.alertSection}>
                    <h2 className={styles.alertTitle}>Emergency Actions</h2>
                    <div className={styles.alertButtons}>
                        <button className={styles.sendAlertButton} onClick={handleSendAlert}>Send Alert to All Family</button>
                        <button className={styles.reportMissingButton} onClick={handleReportMissing}>Report Missing</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FamilyTracker;