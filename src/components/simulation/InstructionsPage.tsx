import React from 'react';
import './styles/InstructionsPage.css';

type InstructionsPageProps = {
  onStartGame: () => void;
};

const InstructionsPage: React.FC<InstructionsPageProps> = ({ onStartGame }) => {
  return (
    <div className="instructions-page-bg">
      <div className="instructions-card">
        <h2>📢 Game Instructions</h2>
        <ul>
          <li>🌊 The rescuer moves using arrow keys.</li>
          <li>🌊 Pick up children and elders by touching them.</li>
          <li>🌊 Each citizen rescued gives 10 points.</li>
          <li>🌊 Deliver citizens to the shelter to earn 20 more points.</li>
          <li>🌊 You can carry only one citizen at a time.</li>
          <li>🌊 Try to rescue all citizens before time runs out!</li>
        </ul>
        <button onClick={onStartGame}>Start Game</button>
      </div>
    </div>
  );
};

export default InstructionsPage;