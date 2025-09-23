// src/components/simulation/games/AppFlood.tsx

import React, { useState, useEffect, useRef } from 'react';

// Corrected Imports to match the new filenames
import floodBg from '../../../assets/flood-bg.jpg';
import rescuerImg from '../../../assets/rescuer-boat.png';
import shelterImg from '../../../assets/shelter-building.png';

type CitizenType = 'elder' | 'child';
type Citizen = {
  id: number;
  type: CitizenType;
  left: number;
  top: number;
  rescued: boolean;
};

type AppFloodProps = {
  onGameOver: (finalScore: number) => void;
};

const rescuerWidth = 90;
const rescuerHeight = 150;
const shelterWidth = 200;
const shelterHeight = 200;
const shelterMargin = 30;
const ballSize = 30;
const speed = 5;

const AppFlood: React.FC<AppFloodProps> = ({ onGameOver }) => {
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [citizens, setCitizens] = useState<Citizen[]>([
    { id: 1, type: 'elder', left: window.innerWidth * 0.12, top: window.innerHeight * 0.18, rescued: false },
    { id: 2, type: 'child', left: window.innerWidth * 0.38, top: window.innerHeight * 0.43, rescued: false },
    { id: 3, type: 'elder', left: window.innerWidth * 0.58, top: window.innerHeight * 0.28, rescued: false },
    { id: 4, type: 'child', left: window.innerWidth * 0.63, top: window.innerHeight * 0.68, rescued: false },
    { id: 5, type: 'elder', left: window.innerWidth * 0.48, top: window.innerHeight * 0.82, rescued: false },
    { id: 6, type: 'child', left: window.innerWidth * 0.25, top: window.innerHeight * 0.77, rescued: false },
  ]);
  const [rescuer, setRescuer] = useState({ left: 50, top: 50 });
  const [carriedCitizens, setCarriedCitizens] = useState<Citizen[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const keysRef = useRef<{ [key: string]: boolean }>({});
  const wasInShelterRef = useRef(false);
  const deliveryFlagRef = useRef(false);

  // --- Removed these lines as they are replaced by the imports ---
  // const floodBg = '/flood.jpg';
  // const rescuerImg = '/rescuer.png';
  // const shelterImg = '/house.1.png';
  // -----------------------------------------------------------------

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    const docEl = document.documentElement;
    docEl.style.margin = '0';
    docEl.style.padding = '0';
    docEl.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
      docEl.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key] = true;
    };
    const onKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key] = false;
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const update = () => {
      setRescuer((pos) => {
        let { left, top } = pos;
        const maxLeft = viewport.width - rescuerWidth;
        const maxTop = viewport.height - rescuerHeight;

        if (keysRef.current['ArrowLeft']) left -= speed;
        if (keysRef.current['ArrowRight']) left += speed;
        if (keysRef.current['ArrowUp']) top -= speed;
        if (keysRef.current['ArrowDown']) top += speed;

        left = Math.max(0, Math.min(left, maxLeft));
        top = Math.max(0, Math.min(top, maxTop));

        return { left, top };
      });
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [viewport, gameOver]);

  const checkCollision = (r: { left: number; top: number }, c: Citizen) =>
    r.left + rescuerWidth > c.left &&
    r.left < c.left + ballSize &&
    r.top + rescuerHeight > c.top &&
    r.top < c.top + ballSize;

  const isNearShelter = (r: { left: number; top: number }) =>
    r.left + rescuerWidth > viewport.width - shelterWidth - shelterMargin &&
    r.left < viewport.width - shelterMargin &&
    r.top + rescuerHeight > shelterMargin &&
    r.top < shelterMargin + shelterHeight;

  useEffect(() => {
    if (gameOver) return;

    setCitizens((cs) =>
      cs.map((c) => {
        if (!c.rescued && checkCollision(rescuer, c)) {
          setCarriedCitizens((prev) => [...prev, c]);
          setScore((prev) => prev + 5);
          return { ...c, rescued: true };
        }
        return c;
      })
    );

    const nowInShelter = isNearShelter(rescuer);
    if (nowInShelter && !wasInShelterRef.current && carriedCitizens.length > 0 && !deliveryFlagRef.current) {
      deliveryFlagRef.current = true;
      const livesSaved = carriedCitizens.length;
      setScore((prev) => prev + livesSaved * 10);
      setCarriedCitizens([]);
    }
    if (!nowInShelter) {
      deliveryFlagRef.current = false;
    }
    wasInShelterRef.current = nowInShelter;

    const allRescued = citizens.every((c) => c.rescued);
    if (allRescued && carriedCitizens.length === 0) {
      setGameOver(true);
      onGameOver(score);
    }
  }, [rescuer, citizens, carriedCitizens, score, onGameOver, gameOver]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        userSelect: 'none',
      }}
      tabIndex={0}
    >
      {/* Background (Moved to the top for layering) */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          // Use the imported variable here
          backgroundImage: `url(${floodBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'brightness(0.95)',
        }}
      />

      {/* Scoreboard */}
      <div
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          fontSize: 28,
          color: '#FFD700',
          fontWeight: 'bold',
          textShadow: '1px 1px 5px black',
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '6px 12px',
          borderRadius: 8,
          userSelect: 'none',
          zIndex: 10,
        }}
      >
        Score: {score}
      </div>

      {/* Shelter */}
      <div
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          width: shelterWidth,
          height: shelterHeight,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 3,
        }}
      >
        <img
          src={shelterImg}
          alt="Shelter"
          style={{
            width: '100%',
            height: '100%',
          }}
          draggable={false}
        />
      </div>

      {/* Citizens */}
      {citizens.map((c) =>
        !c.rescued ? (
          <div
            key={c.id}
            style={{
              position: 'absolute',
              left: c.left,
              top: c.top,
              width: ballSize,
              height: ballSize,
              borderRadius: '50%',
              backgroundColor: c.type === 'elder' ? 'white' : 'black',
              pointerEvents: 'none',
              boxShadow: '0 0 5px 1px rgba(0,0,0,0.5)',
              zIndex: 1,
            }}
          />
        ) : null
      )}

      {/* Rescuer */}
      {!gameOver && (
        <img
          src={rescuerImg}
          alt="Rescuer"
          style={{
            position: 'absolute',
            left: rescuer.left,
            top: rescuer.top,
            width: rescuerWidth,
            height: rescuerHeight,
            zIndex: 5,
            userSelect: 'none',
          }}
          draggable={false}
        />
      )}

      {/* Game Over Overlay */}
      {gameOver && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: 36,
            fontWeight: 'bold',
            zIndex: 20,
          }}
        >
          <div>🎉 Game Over 🎉</div>
          <div style={{ marginTop: 20, fontSize: 28 }}>Final Score: {score}</div>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: 30,
              padding: '10px 20px',
              fontSize: 20,
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              backgroundColor: '#FFD700',
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default AppFlood;