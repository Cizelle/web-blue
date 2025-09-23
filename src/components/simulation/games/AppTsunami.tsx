import React, { useState, useEffect, useRef } from 'react';

// --- Updated Imports for Tsunami Assets ---
import tsunamiBg from '../../../assets/tsunami-bg.png';
import rescuerImg from '../../../assets/rescuer-boat.png';
import shelterImg from '../../../assets/shelter-building.png';

// --- Type definitions and constants ---
type CitizenType = 'elder' | 'child';
type Citizen = {
  id: number;
  type: CitizenType;
  left: number;
  top: number;
  rescued: boolean;
};

type AppTsunamiProps = {
  onGameOver: (finalScore: number) => void;
};

const rescuerWidth = 90;
const rescuerHeight = 150;
const shelterWidth = 200;
const shelterHeight = 200;
const shelterMargin = 30;
const ballSize = 30;
const speed = 5;

const AppTsunami: React.FC<AppTsunamiProps> = ({ onGameOver }) => {
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [citizens, setCitizens] = useState<Citizen[]>([
    { id: 1, type: 'elder', left: window.innerWidth * 0.10, top: window.innerHeight * 0.20, rescued: false },
    { id: 2, type: 'child', left: window.innerWidth * 0.35, top: window.innerHeight * 0.45, rescued: false },
    { id: 3, type: 'elder', left: window.innerWidth * 0.60, top: window.innerHeight * 0.25, rescued: false },
    { id: 4, type: 'child', left: window.innerWidth * 0.64, top: window.innerHeight * 0.65, rescued: false },
    { id: 5, type: 'elder', left: window.innerWidth * 0.50, top: window.innerHeight * 0.80, rescued: false },
    { id: 6, type: 'child', left: window.innerWidth * 0.22, top: window.innerHeight * 0.75, rescued: false },
  ]);

  const [rescuer, setRescuer] = useState({ left: 50, top: 50 });
  const [carriedCitizens, setCarriedCitizens] = useState<Citizen[]>([]);
  const [score, setScore] = useState(0);

  const keysRef = useRef<{ [key: string]: boolean }>({});
  const wasInShelterRef = useRef(false);
  const deliveryFlagRef = useRef(false);

  // --- Removed redundant image path definitions ---
  // const tsunamiBg = '/tsunami-2.png';
  // const rescuerImg = '/rescuer.png';
  // const shelterImg = '/house.1.png';

  // Resize handling
  useEffect(() => {
    const onResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent scrolling
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

  // Keyboard handling
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => (keysRef.current[e.key] = true);
    const onKeyUp = (e: KeyboardEvent) => (keysRef.current[e.key] = false);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  // Movement
  useEffect(() => {
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
  }, [viewport]);

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

  // Collision & delivery logic
  useEffect(() => {
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

    if (nowInShelter && !wasInShelterRef.current && !deliveryFlagRef.current) {
      deliveryFlagRef.current = true;

      const allCarried = [...carriedCitizens];
      citizens.forEach((c) => {
        if (c.rescued && !carriedCitizens.find((cc) => cc.id === c.id)) {
          allCarried.push(c);
        }
      });

      if (allCarried.length > 0) {
        setScore((prev) => prev + allCarried.length * 10);
        setCarriedCitizens([]);
      }
    }

    if (!nowInShelter) deliveryFlagRef.current = false;
    wasInShelterRef.current = nowInShelter;

    // Game over check
    if (citizens.every((c) => c.rescued)) {
      setTimeout(() => onGameOver(score), 100);
    }
  }, [rescuer, citizens, carriedCitizens, score, onGameOver]);

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
      {/* Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          // --- Use imported variable here ---
          backgroundImage: `url(${tsunamiBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'brightness(0.95)',
        }}
      />

      {/* Shelter */}
      <img
        // --- Use imported variable here ---
        src={shelterImg}
        alt="Shelter"
        style={{
          position: 'fixed',
          right: `${shelterMargin}px`,
          top: `${shelterMargin}px`,
          width: `${shelterWidth}px`,
          height: `${shelterHeight}px`,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 3,
        }}
        draggable={false}
      />

      {/* Citizens */}
      {citizens.map(
        (c) =>
          !c.rescued && (
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
          )
      )}

      {/* Rescuer */}
      <img
        // --- Use imported variable here ---
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

      {/* Score */}
      <div
        style={{
          position: 'fixed',
          top: 20,
          left: 20,
          fontSize: 28,
          color: '#FFD700',
          fontWeight: 'bold',
          textShadow: '1px 1px 5px black',
          userSelect: 'none',
          zIndex: 10,
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '6px 12px',
          borderRadius: 8,
        }}
      >
        Score: {score}
      </div>
    </div>
  );
};

export default AppTsunami;