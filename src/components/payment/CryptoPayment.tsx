// src/components/payment/CryptoPayment.tsx
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './PaymentScreens.module.css';

const CryptoPayment: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const amount = searchParams.get('amount');
    const purpose = searchParams.get('purpose');

    const handleCopyAddress = () => {
        navigator.clipboard.writeText('0x123...abc456');
        alert('Wallet address copied to clipboard!');
    };

    const handlePaymentComplete = () => {
        // In a real app, you would verify a transaction on the blockchain
        // For this demo, we'll just navigate to the success screen
        navigate(`/payment-success?amount=${amount}&method=Crypto`);
    };

    return (
        <div className={styles.paymentContainer}>
            <div className={styles.paymentCard}>
                <h2 className={styles.paymentTitle}>Pay with Crypto</h2>
                <div className={styles.detailsSection}>
                    <p>Donation Amount: <span className={styles.amountText}>₹{amount || '0'}</span></p>
                    {purpose && <p>Purpose: {purpose}</p>}
                </div>

                <div className={styles.section}>
                    <p className={styles.cryptoInstruction}>
                        Please send <span className={styles.amountText}>{amount}</span> to the wallet address below.
                        <br/>
                        Ensure you are sending the correct cryptocurrency.
                    </p>
                    <div className={styles.walletAddressBox}>
                        <code className={styles.walletAddress}>0x123abc456def789...</code>
                        <button className={styles.copyButton} onClick={handleCopyAddress}>Copy Address</button>
                    </div>
                </div>

                <button 
                    className={styles.payButton}
                    onClick={handlePaymentComplete}>
                    I have paid
                </button>
            </div>
        </div>
    );
};

export default CryptoPayment;