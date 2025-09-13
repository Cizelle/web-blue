import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AnalystDashboard.module.css';

const AnalystDashboard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.analystDashboard}>
            <div className={styles.headerBanner}>
                <h1 className={styles.title}>{t('analystDashboard.title')}</h1>
                <p className={styles.subtitle}>{t('analystDashboard.subtitle')}</p>
                <div className={styles.statusBadges}>
                    <span className={styles.badgeRealtime}>
                        <i className="fas fa-signal"></i> {t('analystDashboard.realtimeMonitoring')}
                    </span>
                    <span className={styles.badgePosts}>
                        1,247 {t('analystDashboard.posts')}
                    </span>
                </div>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#2196F3' }}><i className="fas fa-comments"></i></div>
                    <div className={styles.statNumber}>2,456</div>
                    <div className={styles.statLabel}>{t('analystDashboard.totalMentions')}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#4CAF50' }}><i className="fas fa-chart-line"></i></div>
                    <div className={styles.statNumber}>+23%</div>
                    <div className={styles.statLabel}>{t('analystDashboard.growth')}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FF5722' }}><i className="fas fa-exclamation-circle"></i></div>
                    <div className={styles.statNumber}>47</div>
                    <div className={styles.statLabel}>{t('analystDashboard.criticalAlerts')}</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FFC107' }}><i className="fas fa-bullseye"></i></div>
                    <div className={styles.statNumber}>8.2M</div>
                    <div className={styles.statLabel}>{t('analystDashboard.totalReach')}</div>
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.sentimentTrend}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-chart-area"></i> {t('analystDashboard.sentimentTrendTitle')}</div>
                    </div>
                    {/* Placeholder for a chart. In a real app, this would be a charting library component */}
                    <img src="https://via.placeholder.com/600x300.png?text=Sentiment+Chart+Placeholder" alt="Sentiment Trend Chart" className={styles.chartImage} />
                </div>
                
                <div className={styles.keywordsAndPostsGrid}>
                    <div className={styles.trendingKeywords}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}><i className="fas fa-hashtag"></i> {t('analystDashboard.trendingKeywordsTitle')}</div>
                        </div>
                        <ul className={styles.keywordList}>
                            <li>
                                <span className={styles.keywordDot} style={{ backgroundColor: '#ef5350' }}></span>
                                {t('analystDashboard.tsunamiKeyword')}
                                <span className={styles.keywordCount}>234</span>
                            </li>
                            <li>
                                <span className={styles.keywordDot} style={{ backgroundColor: '#2196f3' }}></span>
                                {t('analystDashboard.evacuationKeyword')}
                                <span className={styles.keywordCount}>189</span>
                            </li>
                            <li>
                                <span className={styles.keywordDot} style={{ backgroundColor: '#4caf50' }}></span>
                                {t('analystDashboard.rescueKeyword')}
                                <span className={styles.keywordCount}>156</span>
                            </li>
                            <li>
                                <span className={styles.keywordDot} style={{ backgroundColor: '#f44336' }}></span>
                                {t('analystDashboard.floodingKeyword')}
                                <span className={styles.keywordCount}>143</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.highImpactPosts}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}><i className="fas fa-bullhorn"></i> {t('analystDashboard.highImpactPostsTitle')}</div>
                            <button className={styles.viewAllButton}>{t('analystDashboard.viewAllButton')}</button>
                        </div>
                        <div className={styles.postItem}>
                            <div className={styles.postHeader}>
                                <span className={styles.platformBadge}>{t('analystDashboard.twitterHandle')}</span>
                                <span className={styles.postTime}>{t('analystDashboard.hoursAgo', { count: 2 })}</span>
                            </div>
                            <p className={styles.postContent}>{t('analystDashboard.twitterPost')}</p>
                            <div className={styles.postStats}>
                                <i className="far fa-heart"></i> 234
                                <i className="far fa-comment"></i> 56
                                <i className="far fa-share-square"></i> 23
                            </div>
                        </div>
                        <div className={styles.postItem}>
                            <div className={styles.postHeader}>
                                <span className={styles.platformBadge}>{t('analystDashboard.instagramHandle')}</span>
                                <span className={styles.postStatusBadge}>{t('analystDashboard.positive')}</span>
                                <span className={styles.postTime}>{t('analystDashboard.hoursAgo', { count: 4 })}</span>
                            </div>
                            <p className={styles.postContent}>{t('analystDashboard.instagramPost')}</p>
                            <div className={styles.postStats}>
                                <i className="far fa-heart"></i> 789
                                <i className="far fa-comment"></i> 123
                                <i className="far fa-share-square"></i> 67
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalystDashboard;