// src/components/payment/PaymentSuccess.tsx
import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styles from './PaymentScreens.module.css';

const PaymentSuccess: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const amount = searchParams.get('amount');
    const method = searchParams.get('method');

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className={styles.paymentContainer}>
            <div className={`${styles.paymentCard} ${styles.successCard}`}>
                <div className={styles.successIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-8.81"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <h2 className={styles.successTitle}>Payment Successful!</h2>
                <p className={styles.successMessage}>
                    Thank you for your generous donation of <span className={styles.amountText}>₹{amount || '0'}</span>.
                    <br/>
                    Your contribution helps us provide critical support to those in need.
                </p>
                <div className={styles.successDetails}>
                    <p>Payment Method: <span>{method || 'N/A'}</span></p>
                </div>
                <button className={styles.goHomeButton} onClick={handleGoHome}>Go to Dashboard</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;