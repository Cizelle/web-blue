// src/components/donation/CampaignsPage.tsx
import React from 'react';
import styles from './CampaignsPage.module.css';
import { Link } from 'react-router-dom'; // Import Link

const CampaignsPage: React.FC = () => {
    // Array to simulate campaign data
    const campaigns = [
        { id: 1, name: "Gurugram Floods Relief Fund", description: "Providing food, shelter, and medical aid to flood victims." },
        { id: 2, name: "Coastal Cleanup Drive", description: "Supporting volunteer groups cleaning up our coastlines." },
        { id: 3, name: "Essential Supplies for Evacuees", description: "Raising funds for water, blankets, and hygiene kits for displaced families." },
        { id: 4, name: "Emergency Housing Initiative", description: "Building temporary shelters for those who have lost their homes." },
        { id: 5, name: "Rebuilding Communities", description: "Long-term support for reconstructing infrastructure and homes." },
        { id: 6, name: "Medical Aid for Remote Areas", description: "Sending mobile medical teams to hard-to-reach communities affected by the disaster." },
        { id: 7, name: "School Rebuilding Program", description: "Restoring educational facilities damaged by the storm." },
        { id: 8, name: "Psychological Support Services", description: "Providing counseling and support for individuals dealing with trauma." },
    ];

    return (
        <>
            <div className={styles.titleSection}>
                <h1 className={styles.pageTitle}>Disaster Relief Campaigns</h1>
                <p className={styles.pageSubtitle}>Support communities affected by natural disasters by donating to active campaigns. Every contribution makes a difference.</p>
            </div>
            <div className={styles.campaignsGrid}>
                {campaigns.map((campaign) => (
                    <div key={campaign.id} className={styles.campaignCard}>
                        <div className={styles.cardContent}>
                            <div className={styles.cardName}>{campaign.name}</div>
                            <div className={styles.cardDescription}>{campaign.description}</div>
                        </div>
                        <Link to={`/donate/${encodeURIComponent(campaign.name)}`} className={styles.donateButton}>
                            Donate Now
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CampaignsPage;