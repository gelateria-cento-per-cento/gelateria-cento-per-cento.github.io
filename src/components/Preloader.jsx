import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [showLogo, setShowLogo] = useState(false);
  const [goFill, setGoFill] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Faster animation sequence
    const t1 = setTimeout(() => setShowLogo(true), 50); // was 100
    const t2 = setTimeout(() => setGoFill(true), 150); // was 300
    const t3 = setTimeout(() => {
      setGone(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 450); // was 1050
    }, 800); // was 1700

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (gone && !onComplete) return null;

  return (
    <div id="pre" className={gone ? 'gone' : ''}>
      <div className={`pre-logo ${showLogo ? 'show' : ''}`}>
        Cento <em>Per Cento</em>
      </div>
      <div className="pre-bar">
        <div className={`pre-fill ${goFill ? 'go' : ''}`}></div>
      </div>
    </div>
  );
}
