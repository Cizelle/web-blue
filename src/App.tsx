// src/App.tsx
import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/Auth/LoginForm';
import RoleSelectionScreen from './components/Auth/RoleSelectionScreen';
import CitizenRegistrationForm from './components/Auth/CitizenRegistrationForm';
import OfficialAnalystRegistrationForm from './components/Auth/OfficialAnalystRegistrationForm';
import CitizenDashboard from './components/Dashboard/CitizenDashboard'; // Import the new component

type Screen = 'login' | 'registerRoles' | 'citizenRegister' | 'officialAnalystRegister' | 'dashboard';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [user, setUser] = useState<{ email: string, role: string } | null>(null);

  const handleRegisterClick = () => {
    setCurrentScreen('registerRoles');
  };

  const handleBackToLogin = () => {
    setCurrentScreen('login');
  };

  const handleLoginSuccess = (loggedInUser: { email: string, role: string }) => {
    setUser(loggedInUser);
    setCurrentScreen('dashboard');
    console.log(`User ${loggedInUser.email} has logged in.`);
  };

  const handleRegistrationSuccess = (registeredUser: { email: string, role: string }) => {
    setUser(registeredUser);
    setCurrentScreen('dashboard');
    console.log(`User ${registeredUser.email} (${registeredUser.role}) has registered.`);
  };

  const handleRoleSelected = (role: string) => {
    if (role === 'Citizen') {
      setCurrentScreen('citizenRegister');
    } else if (role === 'Official' || role === 'Analyst') {
      setCurrentScreen('officialAnalystRegister');
    }
  };

  const Dashboard = () => {
    if (user?.role === 'Citizen') {
      return <CitizenDashboard />;
    }
    // You can add more dashboard components for other roles here
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Welcome, {user?.email}!</h1>
        <p>This is your {user?.role} dashboard. You are logged in.</p>
        <button onClick={() => setCurrentScreen('login')}>Logout</button>
      </div>
    );
  };

  return (
    <div className="App">
      {currentScreen === 'login' && <LoginForm onRegisterClick={handleRegisterClick} onLoginSuccess={handleLoginSuccess} />}
      {currentScreen === 'registerRoles' && <RoleSelectionScreen onRoleSelected={handleRoleSelected} onBackToLogin={handleBackToLogin} />}
      {currentScreen === 'citizenRegister' && <CitizenRegistrationForm onBackToLogin={handleBackToLogin} onRegistrationSuccess={(u) => handleRegistrationSuccess({ ...u, role: 'Citizen' })} />}
      {currentScreen === 'officialAnalystRegister' && <OfficialAnalystRegistrationForm onBackToLogin={handleBackToLogin} onRegistrationSuccess={(u) => handleRegistrationSuccess({ ...u, role: 'Official' })} role="Official" />}
      {currentScreen === 'dashboard' && <Dashboard />}
    </div>
  );
};

export default App;