import React, { useState } from 'react';
import GameChoicePage from './GameChoicePage';
import InstructionsPage from './InstructionsPage';
import AppFlood from './games/AppFlood';
import AppTsunami from './games/AppTsunami';

const Simulation: React.FC = () => {
  const [page, setPage] = useState<'choice' | 'instructions' | 'game' | 'gameover'>('choice');
  const [selectedGame, setSelectedGame] = useState<'flood' | 'tsunami' | null>(null);
  const [finalScore, setFinalScore] = useState(0);

  const handleGameSelect = (game: 'flood' | 'tsunami') => {
    setSelectedGame(game);
    setPage('instructions');
  };

  const handleStartGame = () => {
    setPage('game');
  };

  const handleGameOver = (score: number) => {
    setFinalScore(score);
    setPage('gameover');
  };

  const handleRestart = () => {
    setPage('choice');
    setSelectedGame(null);
    setFinalScore(0);
  };

  if (page === 'choice') {
    return <GameChoicePage onSelectGame={handleGameSelect} />;
  }

  if (page === 'instructions') {
    return <InstructionsPage onStartGame={handleStartGame} />;
  }

  if (page === 'game') {
    if (selectedGame === 'flood')
      return <AppFlood onGameOver={handleGameOver} />;
    if (selectedGame === 'tsunami')
      return <AppTsunami onGameOver={handleGameOver} />;
  }

  if (page === 'gameover') {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.85)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            background: '#222',
            padding: '40px 60px',
            borderRadius: '20px',
            boxShadow: '0 0 20px rgba(255,255,255,0.3)',
          }}
        >
          <h1 style={{ fontSize: '42px', marginBottom: '20px' }}>🎉 Thanks for Playing! 🎉</h1>
          <p style={{ fontSize: '28px', marginBottom: '10px' }}>
            Congratulations! You saved lives ❤️
          </p>
          <p style={{ fontSize: '24px', marginBottom: '30px' }}>
            Final Score: <strong>{finalScore}</strong>
          </p>
          <button
            onClick={handleRestart}
            style={{
              padding: '12px 24px',
              fontSize: '20px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: '#FFD700',
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            🔄 Play Again
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Simulation;