// src/components/Auth/CitizenRegistrationForm.tsx
import React, { useState, useRef } from 'react';
import styles from './CitizenRegistrationForm.module.css';

interface CitizenRegistrationFormProps {
  onBackToLogin: () => void;
  // Corrected: Added the onRegistrationSuccess prop
  onRegistrationSuccess: (user: { email: string, role: string }) => void;
}

const CitizenRegistrationForm: React.FC<CitizenRegistrationFormProps> = ({ onBackToLogin, onRegistrationSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const existingUser = {
    email: 'existinguser@gmail.com'
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  };

  const handleGoogleRegister = () => {
    setErrorMessage('');
    const googleEmail = 'newuser@gmail.com';

    if (googleEmail === existingUser.email) {
      setErrorMessage('This Google account is already registered. Please log in.');
    } else {
      onRegistrationSuccess({ email: googleEmail, role: 'Citizen' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h2 className={styles.welcomeText}>Welcome to Sahayak!</h2>
        <p className={styles.welcomeSubtitle}>
          To keep connected with us please login with your personal info
        </p>
        <button className={styles.panelButton} onClick={onBackToLogin}>LOGIN</button>
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.rightPanelTitle}>Register</h2>
        
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        
        <div className={styles.scrollableContent}>

          <div className={styles.photoUploadSection}>
            <div className={styles.photoPlaceholder}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.cameraIcon}>
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <button className={styles.uploadButton} onClick={handleUploadClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Upload Photo *
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className={styles.hiddenFileInput}
            />
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" id="fullName" className={styles.input} placeholder="Enter your full name" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" id="email" className={styles.input} placeholder="Enter your email" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="tel" id="phone" className={styles.input} placeholder="Enter your phone number" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" id="state" className={styles.input} placeholder="Enter your state" required />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" id="country" className={styles.input} placeholder="Enter your country" required />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input type={showPassword ? "text" : "password"} id="password" className={styles.input} placeholder="Create a password" required />
                <span className={styles.eyeIcon} onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.91 4.24A10.07 10.07 0 0 1 12 4c7 0 11 8 11 8a18.45 18.45 0 0 1-2.09 3.91m-7.23-2.91a3 3 0 1 0-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.06 13.91a10 10 0 0 1 20.01 0"/><path d="M12 18.01a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><path d="M12 12.01l.01.01"/>
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" className={styles.input} placeholder="Confirm your password" required />
                <span className={styles.eyeIcon} onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.91 4.24A10.07 10.07 0 0 1 12 4c7 0 11 8 11 8a18.45 18.45 0 0 1-2.09 3.91m-7.23-2.91a3 3 0 1 0-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2.06 13.91a10 10 0 0 1 20.01 0"/><path d="M12 18.01a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/><path d="M12 12.01l.01.01"/>
                    </svg>
                  )}
                </span>
              </div>
            </div>
          </form>

        </div>
        
        <button type="submit" className={`${styles.button} ${styles.primaryButton}`}>Register</button>
        <button className={`${styles.button} ${styles.googleButton}`} onClick={handleGoogleRegister}>
          <img src="https://www.google.com/favicon.ico" alt="Google icon" className={styles.googleIcon} />
          Register with Google
        </button>

        <p className={styles.loginText}>
          Already have an account? <a href="#" className={styles.loginLink} onClick={onBackToLogin}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default CitizenRegistrationForm;