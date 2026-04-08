import React, { useState, useEffect, useRef } from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Philosophy() {
  const { t } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIdx(parseInt(entry.target.getAttribute('data-index')));
          }
        });
      },
      { threshold: 0.6, rootMargin: '0px' }
    );

    const cards = containerRef.current.querySelectorAll('.pc');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const items = [
    { num: '01', title: 'p1t', desc: 'p1x' },
    { num: '02', title: 'p2t', desc: 'p2x' },
    { num: '03', title: 'p3t', desc: 'p3x' }
  ];

  return (
    <section id="phil">
      <div className="si">
        <div className="ph-head rv">
          <p className="eyebrow">{t('ph_e')}</p>
          <h2 className="stitle" dangerouslySetInnerHTML={{ __html: t('ph_t') }}></h2>
          <div className="srule"></div>
        </div>
        <div className="pg" ref={containerRef}>
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`pc rv ${activeIdx === i ? 'active' : ''}`}
              data-index={i}
            >
              <span className="pn">{item.num}</span>
              <h3 className="pct">{t(item.title)}</h3>
              <p className="pcx">{t(item.desc)}</p>
            </div>
          ))}
        </div>
        <div className="slider-nav">
          {items.map((_, i) => (
            <div key={i} className={`s-dot ${activeIdx === i ? 'active' : ''}`}></div>
          ))}
        </div>
      </div>
    </section>
  );
}
