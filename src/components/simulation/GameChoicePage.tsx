import React from 'react';
import './styles/GameChoicePage.css';

type GameChoicePageProps = {
  onSelectGame: (game: 'flood' | 'tsunami') => void;
};

const GameChoicePage: React.FC<GameChoicePageProps> = ({ onSelectGame }) => {
  return (
    <div className="game-choice-page-bg">
      <div className="game-choice-card">
        <h1>Select Your Game</h1>
        <div className="game-choice-buttons">
          <button className="game-choice-btn" onClick={() => onSelectGame('flood')}>
            Flood
          </button>
          <button className="game-choice-btn" onClick={() => onSelectGame('tsunami')}>
            Tsunami
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameChoicePage;