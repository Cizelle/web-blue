// src/components/payment/UpiPayment.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './PaymentScreens.module.css';

const UpiPayment: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const amount = searchParams.get('amount');
    const purpose = searchParams.get('purpose');

    const [upiId, setUpiId] = useState('');
    const [timer, setTimer] = useState(300); // 5 minutes in seconds
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (timerActive && timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            alert('Payment request expired. Please try again.');
            // You can navigate back or reset the state here
            setTimerActive(false);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [timerActive, timer]);

    const handleSendRequest = () => {
        if (!upiId) {
            alert('Please enter a valid UPI ID.');
            return;
        }
        // Simulate sending a payment request to the backend
        console.log(`Sending UPI request for amount ${amount} to UPI ID: ${upiId}`);
        setTimerActive(true);

        // Simulate a successful payment after a few seconds
        setTimeout(() => {
            setTimerActive(false);
            navigate(`/payment-success?amount=${amount}&method=UPI`);
        }, 10000); // Simulate a 10-second processing time
    };

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className={styles.paymentContainer}>
            <div className={styles.paymentCard}>
                <h2 className={styles.paymentTitle}>Pay with UPI</h2>
                <div className={styles.detailsSection}>
                    <p>Donation Amount: <span className={styles.amountText}>₹{amount || '0'}</span></p>
                    {purpose && <p>Purpose: {purpose}</p>}
                </div>

                <div className={styles.section}>
                    <label className={styles.label}>Enter your UPI ID</label>
                    <input
                        type="text"
                        className={styles.inputField}
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="e.g., yourname@bank"
                    />
                </div>
                
                {timerActive && (
                    <div className={styles.timerSection}>
                        <p className={styles.timerText}>Payment request sent. Awaiting confirmation...</p>
                        <p className={styles.timerCount}>Time remaining: {formatTime(timer)}</p>
                    </div>
                )}

                <button 
                    className={styles.payButton}
                    onClick={handleSendRequest}
                    disabled={!upiId || timerActive}>
                    Send Payment Request
                </button>
            </div>
        </div>
    );
};

export default UpiPayment;