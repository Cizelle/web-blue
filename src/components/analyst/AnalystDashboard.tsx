import React from 'react';
import styles from './AnalystDashboard.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const generateRandomData = () => {
    const data = [];
    const now = new Date();

    for (let i = 24; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 60 * 60 * 1000);
        data.push({
            hour: `${date.getHours()}:00`,
            happy: Math.floor(Math.random() * 20),
            sad: Math.floor(Math.random() * 15),
            fear: Math.floor(Math.random() * 10),
            neutral: Math.floor(Math.random() * 30) + 20,
            panicAnxiety: Math.floor(Math.random() * 5),
        });
    }
    return data;
};

const chartData = generateRandomData();

const AnalystDashboard: React.FC = () => {
    return (
        <div className={styles.analystDashboard}>
            <div className={styles.headerBanner}>
                <h1 className={styles.title}>Social Media Monitoring</h1>
                <p className={styles.subtitle}>Real-time insights on disaster and humanitarian crises.</p>
                <div className={styles.statusBadges}>
                    <span className={styles.badgeRealtime}>
                        <i className="fas fa-signal"></i> Real-time
                    </span>
                    <span className={styles.badgePosts}>
                        1,247 Posts
                    </span>
                </div>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#2196F3' }}><i className="fas fa-comments"></i></div>
                    <div className={styles.statNumber}>2,456</div>
                    <div className={styles.statLabel}>Total Mentions</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#4CAF50' }}><i className="fas fa-chart-line"></i></div>
                    <div className={styles.statNumber}>+23%</div>
                    <div className={styles.statLabel}>Growth (24h)</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FF5722' }}><i className="fas fa-exclamation-circle"></i></div>
                    <div className={styles.statNumber}>47</div>
                    <div className={styles.statLabel}>Critical Alerts</div>
                </div>
                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ color: '#FFC107' }}><i className="fas fa-bullseye"></i></div>
                    <div className={styles.statNumber}>8.2M</div>
                    <div className={styles.statLabel}>Total Reach</div>
                </div>
            </div>

            <div className={styles.contentGrid}>
                <div className={styles.sentimentTrend}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}><i className="fas fa-chart-area"></i> Sentiment Trend</div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="hour" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="happy" stroke="#4CAF50" name="Happy" />
                            <Line type="monotone" dataKey="sad" stroke="#2196F3" name="Sad" />
                            <Line type="monotone" dataKey="fear" stroke="#FFC107" name="Fear" />
                            <Line type="monotone" dataKey="neutral" stroke="#9E9E9E" name="Neutral" />
                            <Line type="monotone" dataKey="panicAnxiety" stroke="#FF5722" name="Panic/Anxiety" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                
                <div className={styles.keywordsAndPostsGrid}>
                    <div className={styles.trendingKeywords}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}><i className="fas fa-hashtag"></i> Trending Keywords</div>
                        </div>
                        <ul className={styles.keywordList}>
                            <li>
                                <span className={styles.keywordDot} style={{ backgroundColor: '#ef5350' }}></span>
                                Tsunami
                                <span className={styles.keywordCount}>234</span>
                            </li>
                            <li>
                                <span className={styles.keywordDot} style={{ backgroundColor: '#2196f3' }}></span>
                                Evacuation
                                <span className={styles.keywordCount}>189</span>
                            </li>
                            <li>
                                <span className={styles.keywordDot} style={{ backgroundColor: '#4caf50' }}></span>
                                Rescue
                                <span className={styles.keywordCount}>156</span>
                            </li>
                            <li>
                                <span className={styles.keywordDot} style={{ backgroundColor: '#f44336' }}></span>
                                Flooding
                                <span className={styles.keywordCount}>143</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.highImpactPosts}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardTitle}><i className="fas fa-bullhorn"></i> High-Impact Posts</div>
                            <button className={styles.viewAllButton}>View All</button>
                        </div>
                        <div className={styles.postItem}>
                            <div className={styles.postHeader}>
                                <span className={styles.platformBadge}>@DisasterWatch</span>
                                <span className={styles.postTime}>2h ago</span>
                            </div>
                            <p className={styles.postContent}>URGENT: Tsunami warning issued for coastal areas. Please evacuate immediately to higher ground.</p>
                            <div className={styles.postStats}>
                                <i className="far fa-heart"></i> 234
                                <i className="far fa-comment"></i> 56
                                <i className="far fa-share-square"></i> 23
                            </div>
                        </div>
                        <div className={styles.postItem}>
                            <div className={styles.postHeader}>
                                <span className={styles.platformBadge}>@RescueHero</span>
                                <span className={styles.postStatusBadge}>Positive</span>
                                <span className={styles.postTime}>4h ago</span>
                            </div>
                            <p className={styles.postContent}>So proud of the rescue teams working tirelessly to help those affected by the floods. Your bravery is inspiring!</p>
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