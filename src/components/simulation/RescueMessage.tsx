import React, { useEffect, useState } from "react";
import "./styles/RescueMessage.css";

interface RescueMessageProps {
  rescuedCount: number;
  totalToRescue: number;
  onClose?: () => void;
}

export default function RescueMessage({
  rescuedCount,
  totalToRescue,
  onClose,
}: RescueMessageProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rescuedCount >= totalToRescue && totalToRescue > 0) {
      setVisible(true);
    }
  }, [rescuedCount, totalToRescue]);

  if (!visible) return null;

  function handleClose() {
    setVisible(false);
    if (onClose) onClose();
  }

  return (
    <div className="rescue-overlay" role="dialog" aria-live="polite" aria-label="Game finished">
      <div className="rescue-card">
        <button className="rescue-close" aria-label="Close" onClick={handleClose}>
          ×
        </button>

        <div className="rescue-content">
          <h2 className="rescue-title">Thanks for playing!</h2>
          <p className="rescue-body">
            Congratulations — you saved everyone! 🎉
          </p>

          <div className="rescue-meta">
            <span className="rescue-count">{`Saved: ${rescuedCount} / ${totalToRescue}`}</span>
          </div>

          <button className="rescue-ok" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}