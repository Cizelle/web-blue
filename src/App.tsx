import React, { useState, ReactNode } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

// Component Imports
import LoginForm from './components/Auth/LoginForm';
import RoleSelectionScreen from './components/Auth/RoleSelectionScreen';
import CitizenRegistrationForm from './components/Auth/CitizenRegistrationForm';
import OfficialAnalystRegistrationForm from './components/Auth/OfficialAnalystRegistrationForm';
import Sidebar from './components/Dashboard/Sidebar';
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
import MissingPersonFinder from './components/missing/MissingPersonFinder';
import ProfilePage from './components/profile/ProfilePage';
import SettingsPage from './components/settings/SettingsPage';

// The single, reusable layout component
interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
            <Sidebar />
            <div style={{ flex: 1, padding: '20px' }}>
                {children}
            </div>
        </div>
    );
};

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
                {/* --- Public Routes (accessible without login) --- */}
                <Route path="/login" element={<LoginForm onRegisterClick={handleRegisterClick} onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/register" element={<RoleSelectionScreen onRoleSelected={handleRoleSelected} onBackToLogin={handleBackToLogin} />} />
                <Route path="/register/citizen" element={<CitizenRegistrationForm onBackToLogin={handleBackToLogin} onRegistrationSuccess={(u) => handleRegistrationSuccess({ ...u, role: 'Citizen' })} />} />
                <Route path="/register/official" element={<OfficialAnalystRegistrationForm onBackToLogin={handleBackToLogin} onRegistrationSuccess={(u) => handleRegistrationSuccess({ ...u, role: 'Official' })} role="Official" />} />
                
                {/* --- Protected Routes (accessible only after login) --- */}
                {user ? (
                    <>
                        <Route path="/" element={<DashboardLayout><CitizenDashboard /></DashboardLayout>} />
                        <Route path="/campaigns" element={<DashboardLayout><CampaignsPage /></DashboardLayout>} />
                        <Route path="/donate/:campaignName" element={<DashboardLayout><DonationPage /></DashboardLayout>} />
                        <Route path="/pay/upi" element={<DashboardLayout><UpiPayment /></DashboardLayout>} />
                        <Route path="/pay/card" element={<DashboardLayout><CardPayment /></DashboardLayout>} />
                        <Route path="/pay/crypto" element={<DashboardLayout><CryptoPayment /></DashboardLayout>} />
                        <Route path="/payment-success" element={<DashboardLayout><PaymentSuccess /></DashboardLayout>} />
                        <Route path="/family" element={<DashboardLayout><FamilyTracker /></DashboardLayout>} />
                        <Route path="/offline" element={<DashboardLayout><OfflineDashboard /></DashboardLayout>} />
                        <Route path="/sos" element={<DashboardLayout><SOSScreen /></DashboardLayout>} />
                        <Route path="/report-hazard" element={<DashboardLayout><ReportHazard /></DashboardLayout>} />
                        <Route path="/missing" element={<DashboardLayout><MissingPersonFinder /></DashboardLayout>} />
                        <Route path="/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
                        <Route path="/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />
                        
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/login" />} />
                )}
            </Routes>
        </div>
    );
};

export default App;