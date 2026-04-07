import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [showLogo, setShowLogo] = useState(false);
  const [goFill, setGoFill] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Ultra-fast animation sequence
    const t1 = setTimeout(() => setShowLogo(true), 0);
    const t2 = setTimeout(() => setGoFill(true), 20);
    const t3 = setTimeout(() => {
      setGone(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 350); // fast exit
    }, 350); // fast wait

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
