// src/components/Auth/LoginForm.tsx
import React, { useState } from 'react';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onRegisterClick: () => void;
  onLoginSuccess: (user: { email: string, role: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onRegisterClick, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

// Hardcoded credentials for demonstration with roles
const credentials = {
    ipshita: { password: '123456', role: 'citizen', email: 'ipshita@example.com' },
    adarsh: { password: '123456', role: 'official', email: 'adarsh@example.com' },
    hello: { password: '123456', role: 'analyst', email: 'hello@example.com' },
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    setErrorMessage(''); // Clear previous errors

    // Look up the user's data based on the entered username (case-insensitive)
    const userDetails = credentials[username.toLowerCase() as keyof typeof credentials];
    
    // Check if a user was found AND if the entered password matches
    if (userDetails && password === userDetails.password) {
      // On successful login, pass the email and the determined role to the parent component
      onLoginSuccess({
        email: userDetails.email,
        role: userDetails.role,
      });
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
};

  const handleGoogleLogin = () => {
    setErrorMessage('');
    // You can adjust this to a different success flow if needed
    onLoginSuccess({ email: 'googleuser@gmail.com', role: 'Citizen' });
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <h2 className={styles.welcomeText}>Welcome to Sahayak!</h2>
        <p className={styles.welcomeSubtitle}>
          To keep connected with us please login with your personal info
        </p>
        <button className={styles.panelButton} onClick={onRegisterClick}>REGISTER</button>
      </div>
      <div className={styles.rightPanel}>
        <div className={styles.topSpacer}></div>
        <h2 className={styles.rightPanelTitle}>Login</h2>
        
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              id="username" 
              className={styles.input} 
              placeholder="Enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className={styles.inputGroup}>
            <div className={styles.passwordWrapper}>
              <input 
                type={showPassword ? "text" : "password"} 
                id="password" 
                className={styles.input} 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
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
            <a href="#" className={styles.forgotPassword}>Forgot password?</a>
          </div>
          <button type="submit" className={`${styles.button} ${styles.primaryButton}`}>Login</button>
        </form>
        
        <button className={`${styles.button} ${styles.googleButton}`} onClick={handleGoogleLogin}>
          <img src="https://www.google.com/favicon.ico" alt="Google icon" className={styles.googleIcon} />
          Login with Google
        </button>
        <button className={`${styles.button} ${styles.otpButton}`}>
          <span className={styles.otpIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </span>
          Login with OTP
        </button>
        <p className={styles.registerText}>
          Don't have an account? <a href="#" className={styles.registerLink} onClick={onRegisterClick}>Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;