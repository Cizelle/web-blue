// src/components/payment/CardPayment.tsx
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './PaymentScreens.module.css';

const CardPayment: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const amount = searchParams.get('amount');
    const purpose = searchParams.get('purpose');

    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');

    const handlePay = () => {
        if (!cardNumber || !cardName || !expiry || !cvv) {
            alert('Please fill in all card details.');
            return;
        }
        // Simulate a payment with a backend service
        console.log(`Processing card payment for amount ${amount}`);

        // Simulate a successful payment
        setTimeout(() => {
            navigate(`/payment-success?amount=${amount}&method=Card`);
        }, 3000);
    };

    return (
        <div className={styles.paymentContainer}>
            <div className={styles.paymentCard}>
                <h2 className={styles.paymentTitle}>Pay with Card</h2>
                <div className={styles.detailsSection}>
                    <p>Donation Amount: <span className={styles.amountText}>₹{amount || '0'}</span></p>
                    {purpose && <p>Purpose: {purpose}</p>}
                </div>
                
                <div className={styles.section}>
                    <label className={styles.label}>Card Number</label>
                    <input type="text" className={styles.inputField} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000" />
                </div>
                <div className={styles.section}>
                    <label className={styles.label}>Cardholder Name</label>
                    <input type="text" className={styles.inputField} value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="John Doe" />
                </div>
                <div className={styles.cardDetailsGroup}>
                    <div className={styles.cardDetailsItem}>
                        <label className={styles.label}>Expiry Date</label>
                        <input type="text" className={styles.inputField} value={expiry} onChange={(e) => setExpiry(e.target.value)} placeholder="MM/YY" />
                    </div>
                    <div className={styles.cardDetailsItem}>
                        <label className={styles.label}>CVV</label>
                        <input type="text" className={styles.inputField} value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder="123" />
                    </div>
                </div>

                <button 
                    className={styles.payButton}
                    onClick={handlePay}
                    disabled={!cardNumber || !cardName || !expiry || !cvv}>
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default CardPayment;