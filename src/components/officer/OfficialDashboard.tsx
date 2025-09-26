import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next'; // <-- REMOVED
// NOTE: Assuming this is a Web/React-Native-Web component since it uses <div> and .module.css
// If this is pure React Native, you need to use <View>, <Text>, and StyleSheet.create.
import styles from './OfficialDashboard.module.css';

const OfficialDashboard: React.FC = () => {
    // const { t } = useTranslation(); // <-- REMOVED
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

    // --- Static English Text Replacements ---
    const TEXT = {
        title: "Official Dashboard",
        subtitle: "Real-Time Hazard Validation & Response Management",
        activeResponse: "Active Response",
        pendingReports: "Pending Reports",
        validatedToday: "Validated Today",
        activeHotspots: "Active Hotspots",
        citizensHelped: "Citizens Helped",
        validationQueueTitle: "Hazard Validation Queue",
        filterButton: "Filter",
        tsunamiWarning: "Tidal Wave Warning",
        high: "High",
        mahTime: "Maharashtra Coast, 5 min ago",
        tsunamiDescription: "Initial seismic data indicates high risk. Requires immediate validation.",
        stormSurge: "Storm Surge Alert",
        moderate: "Moderate",
        ponTime: "Pondicherry Beach, 1 hour ago",
        stormDescription: "High-tide coupled with strong winds. Verification needed for resource allocation.",
        validateButton: "Validate",
        rejectButton: "Reject",
        viewAllReports: `View All ${pendingReports} Reports`,
        activeHotspotsTitle: "Map of Active Hotspots",
        viewMapButton: "View Full Map",
        chennaiMarina: "Chennai Marina",
        reports: "Reports",
        critical: "Critical",
        puducherryBeach: "Puducherry Beach",
        approveRegistrationsTitle: "Official Registrations",
        approveButton: "Approve All Pending"
    };

    return (
        <div className={styles.officialDashboard}>
            <div className={styles.headerBanner}>
                <h1 className={styles.title}>{TEXT.title}</h1>
                <p className={styles.subtitle}>{TEXT.subtitle}</p>
                <div className={styles.statusBadges}>
                    <span className={styles.badgeActive}>
                        <i className="fas fa-chart-line"></i> {TEXT.activeResponse}
                    </span>
                    <span className={styles.badgePending}>
                        {pendingReports} {TEXT.pendingReports}
                    </span>
                </div>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FF5722' }}><i className="fas fa-clock"></i></div>
                    <div className={styles.statNumber}>{pendingReports}</div>
                    <div className={styles.statLabel}>{TEXT.pendingReports}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#4CAF50' }}><i className="fas fa-check-circle"></i></div>
                    <div className={styles.statNumber}>142</div>
                    <div className={styles.statLabel}>{TEXT.validatedToday}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#2196F3' }}><i className="fas fa-map-marker-alt"></i></div>
                    <div className={styles.statNumber}>7</div>
                    <div className={styles.statLabel}>{TEXT.activeHotspots}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FFC107' }}><i className="fas fa-users"></i></div>
                    <div className={styles.statNumber}>1,247</div>
                    <div className={styles.statLabel}>{TEXT.citizensHelped}</div>
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.validationQueue}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-shield-alt"></i> {TEXT.validationQueueTitle}</div>
                        <button className={styles.filterButton}>{TEXT.filterButton}</button>
                    </div>
                    <div className={styles.reportItem}>
                        <div className={styles.reportIcon}><i className="fas fa-exclamation-triangle"></i></div>
                        <div className={styles.reportDetails}>
                            <div className={styles.reportTitle}>{TEXT.tsunamiWarning} <span className={styles.severityHigh}>{TEXT.high}</span></div>
                            <div className={styles.reportMeta}>{TEXT.mahTime}</div>
                            <div className={styles.reportDescription}>{TEXT.tsunamiDescription}</div>
                        </div>
                        <div className={styles.reportActions}>
                            <button className={styles.validateButton} onClick={() => handleValidate(1)}>{TEXT.validateButton}</button>
                            <button className={styles.rejectButton} onClick={() => handleReject(1)}>{TEXT.rejectButton}</button>
                        </div>
                    </div>
                    <div className={styles.reportItem}>
                        <div className={styles.reportIcon}><i className="fas fa-exclamation-triangle"></i></div>
                        <div className={styles.reportDetails}>
                            <div className={styles.reportTitle}>{TEXT.stormSurge} <span className={styles.severityModerate}>{TEXT.moderate}</span></div>
                            <div className={styles.reportMeta}>{TEXT.ponTime}</div>
                            <div className={styles.reportDescription}>{TEXT.stormDescription}</div>
                        </div>
                        <div className={styles.reportActions}>
                            <button className={styles.validateButton} onClick={() => handleValidate(2)}>{TEXT.validateButton}</button>
                            <button className={styles.rejectButton} onClick={() => handleReject(2)}>{TEXT.rejectButton}</button>
                        </div>
                    </div>
                    <div className={styles.viewAllReports}>
                        {TEXT.viewAllReports}
                    </div>
                </div>

                <div className={styles.activeHotspots}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-map-marked-alt"></i> {TEXT.activeHotspotsTitle}</div>
                    </div>
                    <div className={styles.mapPlaceholder}>
                        <div className={styles.mapDotRed}></div>
                        <div className={styles.mapDotPink}></div>
                        <div className={styles.mapDotBlue}></div>
                        <button className={styles.viewMapButton}>{TEXT.viewMapButton}</button>
                    </div>
                    <div className={styles.hotspotItem}>
                        <div className={styles.hotspotName}>{TEXT.chennaiMarina}</div>
                        <div className={styles.hotspotCount}>12 {TEXT.reports}</div>
                        <span className={styles.hotspotSeverityCritical}>{TEXT.critical}</span>
                    </div>
                    <div className={styles.hotspotItem}>
                        <div className={styles.hotspotName}>{TEXT.puducherryBeach}</div>
                        <div className={styles.hotspotCount}>8 {TEXT.reports}</div>
                        <span className={styles.hotspotSeverityHigh}>{TEXT.high}</span>
                    </div>
                </div>

                {/* New section for "Approve All Registrations" */}
                <div className={styles.registrationApprovalCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-user-check"></i> {TEXT.approveRegistrationsTitle}</div>
                    </div>
                    <p>Click below to review and approve all pending user and official registrations.</p>
                    <button className={styles.approveAllButton} onClick={handleApproveRegistrations}>
                        {TEXT.approveButton}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OfficialDashboard;