// src/components/donation/DonationPage.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './DonationPage.module.css';

const DonationPage: React.FC = () => {
    const { campaignName } = useParams<{ campaignName: string }>();
    const navigate = useNavigate();
    const decodedCampaignName = campaignName ? decodeURIComponent(campaignName) : "Unknown Campaign";

    const [donationAmount, setDonationAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [donationPurpose, setDonationPurpose] = useState('');

    const handleDonation = () => {
        // Construct the URL with query parameters for the amount and purpose
        const params = new URLSearchParams();
        params.append('amount', donationAmount);
        if (donationPurpose) {
            params.append('purpose', donationPurpose);
        }

        // Navigate to the correct payment screen based on the selected method
        if (paymentMethod === 'upi') {
            navigate(`/pay/upi?${params.toString()}`);
        } else if (paymentMethod === 'card') {
            navigate(`/pay/card?${params.toString()}`);
        } else if (paymentMethod === 'crypto') {
            navigate(`/pay/crypto?${params.toString()}`);
        }
    };

    return (
        <div className={styles.donationContainer}>
            <div className={styles.donationCard}>
                <h1 className={styles.donationTitle}>{decodedCampaignName}</h1>

                <div className={styles.section}>
                    <label className={styles.label}>Select Payment Method</label>
                    <div className={styles.paymentMethods}>
                        <button 
                            className={`${styles.paymentButton} ${paymentMethod === 'upi' ? styles.active : ''}`}
                            onClick={() => setPaymentMethod('upi')}>
                            UPI
                        </button>
                        <button 
                            className={`${styles.paymentButton} ${paymentMethod === 'card' ? styles.active : ''}`}
                            onClick={() => setPaymentMethod('card')}>
                            Card
                        </button>
                        <button 
                            className={`${styles.paymentButton} ${paymentMethod === 'crypto' ? styles.active : ''}`}
                            onClick={() => setPaymentMethod('crypto')}>
                            Crypto
                        </button>
                    </div>
                </div>

                <div className={styles.section}>
                    <label className={styles.label}>Donation Amount (INR)</label>
                    <input
                        type="number"
                        className={styles.inputField}
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="e.g., 500"
                    />
                </div>

                <div className={styles.section}>
                    <label className={styles.label}>Purpose (Optional)</label>
                    <textarea
                        className={styles.textareaField}
                        value={donationPurpose}
                        onChange={(e) => setDonationPurpose(e.target.value)}
                        placeholder="e.g., For medical supplies"
                    />
                </div>

                <button 
                    className={styles.payButton}
                    onClick={handleDonation}
                    disabled={!donationAmount || !paymentMethod}>
                    Pay
                </button>
            </div>
        </div>
    );
};

export default DonationPage;