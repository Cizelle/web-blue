import React, { useState, ReactNode, useEffect, JSX } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation } from 'react-router-dom';
import './App.css';

// Component Imports
import LoginForm from './components/Auth/LoginForm';
import RoleSelectionScreen from './components/Auth/RoleSelectionScreen';
import CitizenRegistrationForm from './components/Auth/CitizenRegistrationForm';
import OfficialAnalystRegistrationForm from './components/Auth/OfficialAnalystRegistrationForm';
import Sidebar from './components/Dashboard/Sidebar';
import CitizenDashboard from './components/Dashboard/CitizenDashboard';
import OfficialDashboard from './components/officer/OfficialDashboard'; // Imported the new dashboard
import AnalystDashboard from './components/analyst/AnalystDashboard'; // Imported the new dashboard
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

// Type definition for the user
interface User {
  email: string;
  role: string;
}

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

// Private Route Wrapper Component
interface PrivateRouteProps {
  children: JSX.Element;
  user: User | null;
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, user, allowedRoles }) => {
  const location = useLocation();

  if (!user) {
    // Not logged in, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.includes(user.role.toLowerCase())) {
    // User has the correct role, allow access
    return children;
  }

  // Logged in but no permission, redirect to a different dashboard or unauthorized page
  switch (user.role.toLowerCase()) {
    case 'official':
      return <Navigate to="/official-dashboard" replace />;
    case 'analyst':
      return <Navigate to="/analyst-dashboard" replace />;
    case 'citizen':
      return <Navigate to="/" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
};

const App: React.FC = () => {
  // Initialize user state from local storage or session storage for persistence
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();

  // Effect to save user to local storage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const handleLoginSuccess = (loggedInUser: { email: string, role: string }) => {
    setUser(loggedInUser);
    // Navigate based on role after successful login
    switch (loggedInUser.role.toLowerCase()) {
      case 'citizen':
        navigate('/');
        break;
      case 'official':
        navigate('/official-dashboard');
        break;
      case 'analyst':
        navigate('/analyst-dashboard');
        break;
      default:
        navigate('/');
        break;
    }
    console.log(`User ${loggedInUser.email} has logged in.`);
  };

  const handleRegistrationSuccess = (registeredUser: { email: string, role: string }) => {
    setUser(registeredUser);
    // Navigate based on role after successful registration
    switch (registeredUser.role.toLowerCase()) {
      case 'citizen':
        navigate('/');
        break;
      case 'official':
        navigate('/official-dashboard');
        break;
      case 'analyst':
        navigate('/analyst-dashboard');
        break;
      default:
        navigate('/');
        break;
    }
    console.log(`User ${registeredUser.email} (${registeredUser.role}) has registered.`);
  };

  const handleRegisterClick = () => navigate('/register');
  const handleBackToLogin = () => navigate('/login');
  const handleRoleSelected = (role: string) => {
    if (role.toLowerCase() === 'citizen') {
      navigate('/register/citizen');
    } else if (role.toLowerCase() === 'official' || role.toLowerCase() === 'analyst') {
      navigate('/register/official');
    }
  };

  return (
    <div className="App">
      <Routes>
        {/* Public Routes (accessible without login) */}
        <Route path="/login" element={<LoginForm onRegisterClick={handleRegisterClick} onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<RoleSelectionScreen onRoleSelected={handleRoleSelected} onBackToLogin={handleBackToLogin} />} />
        <Route path="/register/citizen" element={<CitizenRegistrationForm onBackToLogin={handleBackToLogin} onRegistrationSuccess={(u) => handleRegistrationSuccess({ ...u, role: 'citizen' })} />} />
        <Route path="/register/official" element={<OfficialAnalystRegistrationForm onBackToLogin={handleBackToLogin} onRegistrationSuccess={(u) => handleRegistrationSuccess({ ...u, role: 'official' })} role="Official" />} />

        {/* Protected Routes (requires login) */}
        <Route path="/" element={<PrivateRoute user={user} allowedRoles={['citizen']}>
          <DashboardLayout><CitizenDashboard /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/official-dashboard" element={<PrivateRoute user={user} allowedRoles={['official']}>
          <DashboardLayout><OfficialDashboard /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/analyst-dashboard" element={<PrivateRoute user={user} allowedRoles={['analyst']}>
          <DashboardLayout><AnalystDashboard /></DashboardLayout>
        </PrivateRoute>} />

        {/* Common Protected Routes for all authenticated users */}
        <Route path="/campaigns" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><CampaignsPage /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/donate/:campaignName" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><DonationPage /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/pay/upi" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><UpiPayment /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/pay/card" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><CardPayment /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/pay/crypto" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><CryptoPayment /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/payment-success" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><PaymentSuccess /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/family" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><FamilyTracker /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/offline" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><OfflineDashboard /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/sos" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><SOSScreen /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/report-hazard" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><ReportHazard /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/missing" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><MissingPersonFinder /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><ProfilePage /></DashboardLayout>
        </PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute user={user} allowedRoles={['citizen', 'official', 'analyst']}>
          <DashboardLayout><SettingsPage /></DashboardLayout>
        </PrivateRoute>} />

        {/* Catch-all route for any undefined paths */}
        <Route path="*" element={<Navigate to={user ? '/' : '/login'} replace />} />
      </Routes>
    </div>
  );
};

export default App;