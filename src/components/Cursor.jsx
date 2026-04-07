import React, { useEffect, useRef, useState } from 'react';

// Detect touch device once at module level
const isTouchDevice = () => window.matchMedia('(hover: none)').matches;

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hover, setHover] = useState(false);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    // On touch devices, do nothing — CSS already hides #cd/#cr
    if (isTouchDevice()) return;

    const handleMouseMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    document.addEventListener('mousemove', handleMouseMove);

    const interactables = document.querySelectorAll('a, button, .rc, .pc');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    let frame;
    const lerp = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.1;
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${pos.current.rx}px`;
        ringRef.current.style.top = `${pos.current.ry}px`;
      }
      frame = requestAnimationFrame(lerp);
    };
    lerp();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('hov', hover);
  }, [hover]);

  // Always render the divs — CSS @media(hover:none) hides them on touch
  return (
    <>
      <div id="cd" ref={dotRef}></div>
      <div id="cr" ref={ringRef}></div>
    </>
  );
}
