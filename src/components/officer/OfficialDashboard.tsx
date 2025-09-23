import React, { useState } from 'react';
import styles from './OfficialDashboard.module.css';

const OfficialDashboard: React.FC = () => {
    const [pendingReports, setPendingReports] = useState(15); // Example state for dynamic count

    const handleValidate = (reportId: number) => {
        console.log(`Report ${reportId} validated.`);
        // In a real app, you'd send this to a backend and update state
        setPendingReports(prev => prev - 1); // Decrement pending reports
    };

    const handleReject = (reportId: number) => {
        console.log(`Report ${reportId} rejected.`);
        // In a real app, you'd send this to a backend and update state
        setPendingReports(prev => prev - 1); // Decrement pending reports
    };

    const handleApproveRegistrations = () => {
        alert("Approving all pending registrations! (Placeholder)");
        // Implement actual logic to approve registrations via API call
    };

    return (
        <div className={styles.officialDashboard}>
            <div className={styles.headerBanner}>
                <h1 className={styles.title}>Official Dashboard</h1>
                <p className={styles.subtitle}>Manage and validate critical reports and user registrations.</p>
                <div className={styles.statusBadges}>
                    <span className={styles.badgeActive}>
                        <i className="fas fa-chart-line"></i> Active Response
                    </span>
                    <span className={styles.badgePending}>
                        {pendingReports} Pending Reports
                    </span>
                </div>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FF5722' }}><i className="fas fa-clock"></i></div>
                    <div className={styles.statNumber}>{pendingReports}</div>
                    <div className={styles.statLabel}>Pending Reports</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#4CAF50' }}><i className="fas fa-check-circle"></i></div>
                    <div className={styles.statNumber}>142</div>
                    <div className={styles.statLabel}>Validated Today</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#2196F3' }}><i className="fas fa-map-marker-alt"></i></div>
                    <div className={styles.statNumber}>7</div>
                    <div className={styles.statLabel}>Active Hotspots</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FFC107' }}><i className="fas fa-users"></i></div>
                    <div className={styles.statNumber}>1,247</div>
                    <div className={styles.statLabel}>Citizens Helped</div>
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.validationQueue}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-shield-alt"></i> Validation Queue</div>
                        <button className={styles.filterButton}>Filter</button>
                    </div>
                    <div className={styles.reportItem}>
                        <div className={styles.reportIcon}><i className="fas fa-exclamation-triangle"></i></div>
                        <div className={styles.reportDetails}>
                            <div className={styles.reportTitle}>Tsunami Warning <span className={styles.severityHigh}>High</span></div>
                            <div className={styles.reportMeta}>Mahabalipuram, 2h ago</div>
                            <div className={styles.reportDescription}>Unusual wave patterns and sea level changes reported by local fishermen.</div>
                        </div>
                        <div className={styles.reportActions}>
                            <button className={styles.validateButton} onClick={() => handleValidate(1)}>Validate</button>
                            <button className={styles.rejectButton} onClick={() => handleReject(1)}>Reject</button>
                        </div>
                    </div>
                    <div className={styles.reportItem}>
                        <div className={styles.reportIcon}><i className="fas fa-exclamation-triangle"></i></div>
                        <div className={styles.reportDetails}>
                            <div className={styles.reportTitle}>Storm Surge <span className={styles.severityModerate}>Moderate</span></div>
                            <div className={styles.reportMeta}>Puducherry, 4h ago</div>
                            <div className={styles.reportDescription}>Rising sea levels causing flooding in low-lying coastal areas.</div>
                        </div>
                        <div className={styles.reportActions}>
                            <button className={styles.validateButton} onClick={() => handleValidate(2)}>Validate</button>
                            <button className={styles.rejectButton} onClick={() => handleReject(2)}>Reject</button>
                        </div>
                    </div>
                    <div className={styles.viewAllReports}>
                        View all {pendingReports} pending reports
                    </div>
                </div>

                <div className={styles.activeHotspots}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-map-marked-alt"></i> Active Hotspots</div>
                    </div>
                    <div className={styles.mapPlaceholder}>
                        <div className={styles.mapDotRed}></div>
                        <div className={styles.mapDotPink}></div>
                        <div className={styles.mapDotBlue}></div>
                        <button className={styles.viewMapButton}>View Map</button>
                    </div>
                    <div className={styles.hotspotItem}>
                        <div className={styles.hotspotName}>Chennai, Marina Beach</div>
                        <div className={styles.hotspotCount}>12 Reports</div>
                        <span className={styles.hotspotSeverityCritical}>Critical</span>
                    </div>
                    <div className={styles.hotspotItem}>
                        <div className={styles.hotspotName}>Puducherry, Main Beach</div>
                        <div className={styles.hotspotCount}>8 Reports</div>
                        <span className={styles.hotspotSeverityHigh}>High</span>
                    </div>
                </div>

                {/* New section for "Approve All Registrations" */}
                <div className={styles.registrationApprovalCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-user-check"></i> Approve Registrations</div>
                    </div>
                    <p>Click below to review and approve all pending user and official registrations.</p>
                    <button className={styles.approveAllButton} onClick={handleApproveRegistrations}>
                        Approve Registrations
                    </button>
                </div>

            </div>
        </div>
    );
};

export default OfficialDashboard;