// src/components/donation/CampaignsPage.tsx
import React from 'react';
import styles from './CampaignsPage.module.css';

const CampaignsPage: React.FC = () => {
  // Array to simulate campaign data
  const campaigns = [
    { id: 1, name: "Gurugram Flood", description: "ID: 1" },
    { id: 2, name: "", description: "" }, // Empty for placeholder
    { id: 3, name: "", description: "" }, // Empty for placeholder
    { id: 4, name: "", description: "" }, // Empty for placeholder
    { id: 5, name: "", description: "" }, // Empty for placeholder
    { id: 6, name: "", description: "" }, // Empty for placeholder
    { id: 7, name: "", description: "" }, // Empty for placeholder
    { id: 8, name: "", description: "" }, // Empty for placeholder
  ];

  return (
    <div className={styles.campaignsContainer}>
      <h1 className={styles.campaignsTitle}>Campainags</h1> {/* Intentional typo "Campainags" as in image */}
      <div className={styles.campaignsGrid}>
        {campaigns.map((campaign) => (
          <div key={campaign.id} className={styles.campaignCard}>
            {campaign.name && <div className={styles.cardName}>{campaign.name}</div>}
            {campaign.description && <div className={styles.cardDescription}>{campaign.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;