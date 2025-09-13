import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './OfficialDashboard.module.css';

const OfficialDashboard: React.FC = () => {
    const { t } = useTranslation();
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
                <h1 className={styles.title}>{t('officialDashboard.title')}</h1>
                <p className={styles.subtitle}>{t('officialDashboard.subtitle')}</p>
                <div className={styles.statusBadges}>
                    <span className={styles.badgeActive}>
                        <i className="fas fa-chart-line"></i> {t('officialDashboard.activeResponse')}
                    </span>
                    <span className={styles.badgePending}>
                        {pendingReports} {t('officialDashboard.pendingReportsCount')}
                    </span>
                </div>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FF5722' }}><i className="fas fa-clock"></i></div>
                    <div className={styles.statNumber}>{pendingReports}</div>
                    <div className={styles.statLabel}>{t('officialDashboard.pendingReportsCount')}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#4CAF50' }}><i className="fas fa-check-circle"></i></div>
                    <div className={styles.statNumber}>142</div>
                    <div className={styles.statLabel}>{t('officialDashboard.validatedTodayCount')}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#2196F3' }}><i className="fas fa-map-marker-alt"></i></div>
                    <div className={styles.statNumber}>7</div>
                    <div className={styles.statLabel}>{t('officialDashboard.activeHotspotsCount')}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FFC107' }}><i className="fas fa-users"></i></div>
                    <div className={styles.statNumber}>1,247</div>
                    <div className={styles.statLabel}>{t('officialDashboard.citizensHelpedCount')}</div>
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.validationQueue}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-shield-alt"></i> {t('officialDashboard.validationQueueTitle')}</div>
                        <button className={styles.filterButton}>{t('officialDashboard.filterButton')}</button>
                    </div>
                    <div className={styles.reportItem}>
                        <div className={styles.reportIcon}><i className="fas fa-exclamation-triangle"></i></div>
                        <div className={styles.reportDetails}>
                            <div className={styles.reportTitle}>{t('officialDashboard.tsunamiWarning')} <span className={styles.severityHigh}>{t('officialDashboard.high')}</span></div>
                            <div className={styles.reportMeta}>{t('officialDashboard.mah_time')}</div>
                            <div className={styles.reportDescription}>{t('officialDashboard.tsunamiDescription')}</div>
                        </div>
                        <div className={styles.reportActions}>
                            <button className={styles.validateButton} onClick={() => handleValidate(1)}>{t('officialDashboard.validateButton')}</button>
                            <button className={styles.rejectButton} onClick={() => handleReject(1)}>{t('officialDashboard.rejectButton')}</button>
                        </div>
                    </div>
                    <div className={styles.reportItem}>
                        <div className={styles.reportIcon}><i className="fas fa-exclamation-triangle"></i></div>
                        <div className={styles.reportDetails}>
                            <div className={styles.reportTitle}>{t('officialDashboard.stormSurge')} <span className={styles.severityModerate}>{t('officialDashboard.moderate')}</span></div>
                            <div className={styles.reportMeta}>{t('officialDashboard.pon_time')}</div>
                            <div className={styles.reportDescription}>{t('officialDashboard.stormDescription')}</div>
                        </div>
                        <div className={styles.reportActions}>
                            <button className={styles.validateButton} onClick={() => handleValidate(2)}>{t('officialDashboard.validateButton')}</button>
                            <button className={styles.rejectButton} onClick={() => handleReject(2)}>{t('officialDashboard.rejectButton')}</button>
                        </div>
                    </div>
                    <div className={styles.viewAllReports}>
                        {t('officialDashboard.viewAllReports', { count: pendingReports })}
                    </div>
                </div>

                <div className={styles.activeHotspots}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-map-marked-alt"></i> {t('officialDashboard.activeHotspotsTitle')}</div>
                    </div>
                    <div className={styles.mapPlaceholder}>
                        <div className={styles.mapDotRed}></div>
                        <div className={styles.mapDotPink}></div>
                        <div className={styles.mapDotBlue}></div>
                        <button className={styles.viewMapButton}>{t('officialDashboard.viewMapButton')}</button>
                    </div>
                    <div className={styles.hotspotItem}>
                        <div className={styles.hotspotName}>{t('officialDashboard.chennaiMarina')}</div>
                        <div className={styles.hotspotCount}>12 {t('officialDashboard.reports')}</div>
                        <span className={styles.hotspotSeverityCritical}>{t('officialDashboard.critical')}</span>
                    </div>
                    <div className={styles.hotspotItem}>
                        <div className={styles.hotspotName}>{t('officialDashboard.puducherryBeach')}</div>
                        <div className={styles.hotspotCount}>8 {t('officialDashboard.reports')}</div>
                        <span className={styles.hotspotSeverityHigh}>{t('officialDashboard.high')}</span>
                    </div>
                </div>

                {/* New section for "Approve All Registrations" - added based on your request */}
                <div className={styles.registrationApprovalCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-user-check"></i> {t('officialDashboard.approveRegistrations')}</div>
                    </div>
                    <p>Click below to review and approve all pending user and official registrations.</p>
                    <button className={styles.approveAllButton} onClick={handleApproveRegistrations}>
                        {t('officialDashboard.approveRegistrations')}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default OfficialDashboard;