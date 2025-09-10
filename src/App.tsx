// src/App.tsx
import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import RoleSelectionScreen from './components/Auth/RoleSelectionScreen';
import CitizenRegistrationForm from './components/Auth/CitizenRegistrationForm';
import OfficialAnalystRegistrationForm from './components/Auth/OfficialAnalystRegistrationForm';
import CitizenDashboard from './components/Dashboard/CitizenDashboard';
import CampaignsPage from './components/donation/CampaignsPage';
import DonationPage from './components/donation/DonationPage';
import UpiPayment from './components/payment/UpiPayment';
import CardPayment from './components/payment/CardPayment';
import CryptoPayment from './components/payment/CryptoPayment';
import PaymentSuccess from './components/payment/PaymentSuccess';
import FamilyTracker from './components/family/FamilyTracker';
import OfflineDashboard from './components/offline/OfflineDashboard'; 
import SOSScreen from './components/sos/SOSScreen'; 
import ReportHazard from './components/report/ReportHazard';

const App: React.FC = () => {
    const [user, setUser] = useState<{ email: string, role: string } | null>(null);
    const navigate = useNavigate();

    const handleLoginSuccess = (loggedInUser: { email: string, role: string }) => {
        setUser(loggedInUser);
        navigate('/');
        console.log(`User ${loggedInUser.email} has logged in.`);
    };

    const handleRegistrationSuccess = (registeredUser: { email: string, role: string }) => {
        setUser(registeredUser);
        navigate('/');
        console.log(`User ${registeredUser.email} (${registeredUser.role}) has registered.`);
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleBackToLogin = () => {
        navigate('/login');
    };
    
    const handleRoleSelected = (role: string) => {
        if (role === 'Citizen') {
            navigate('/register/citizen');
        } else if (role === 'Official' || role === 'Analyst') {
            navigate('/register/official');
        }
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<LoginForm onRegisterClick={handleRegisterClick} onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/register" element={<RoleSelectionScreen onRoleSelected={handleRoleSelected} onBackToLogin={handleBackToLogin} />} />
                <Route path="/register/citizen" element={<CitizenRegistrationForm onBackToLogin={handleBackToLogin} onRegistrationSuccess={(u) => handleRegistrationSuccess({ ...u, role: 'Citizen' })} />} />
                <Route path="/register/official" element={<OfficialAnalystRegistrationForm onBackToLogin={handleBackToLogin} onRegistrationSuccess={(u) => handleRegistrationSuccess({ ...u, role: 'Official' })} role="Official" />} />
                <Route path="/offline" element={<OfflineDashboard />} /> {/* Add the new route */}
                <Route path="/sos" element={<SOSScreen />} /> {/* Add the new route */}
                <Route path="/report-hazard" element={<ReportHazard />} /> {/* Add the new route */}

                {user ? (
                    <>
                        <Route path="/" element={<CitizenDashboard />} />
                        <Route path="/campaigns" element={<CampaignsPage />} />
                        <Route path="/donate/:campaignName" element={<DonationPage />} />
                        <Route path="/pay/upi" element={<UpiPayment />} />
                        <Route path="/pay/card" element={<CardPayment />} />
                        <Route path="/pay/crypto" element={<CryptoPayment />} />
                        <Route path="/payment-success" element={<PaymentSuccess />} />
                        {/* New route for Family Tracker */}
                        <Route path="/family" element={<FamilyTracker />} />
                        {/* New route for Report Hazard */}
                        <Route path="/report-hazard" element={<div>Report Hazard Page</div>} />
                    </>
                ) : (
                    <Route path="/*" element={<LoginForm onRegisterClick={handleRegisterClick} onLoginSuccess={handleLoginSuccess} />} />
                )}
            </Routes>
        </div>
    );
};

export default App;