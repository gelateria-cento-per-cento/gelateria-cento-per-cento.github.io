import React, { useEffect, useState, useRef } from 'react';
import Fabrizio from '../assets/images/shooting_in_progress.png';
import { useI18n } from '../hooks/useI18n';

export default function About() {
  const { t } = useI18n();
  const [counts, setCounts] = useState({ years: 0, reviews: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const animCount = (target, setter, duration) => {
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setter(Math.round(ease * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animCount(30, (v) => setCounts(prev => ({ ...prev, years: v })), 2000);
        animCount(842, (v) => setCounts(prev => ({ ...prev, reviews: v })), 2200);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="si">
        <article className="ag" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="Fabrizio Bottesi" />
          <meta itemProp="jobTitle" content="Mastro Gelataio" />
          <div className="apw rv from-left">
            <div className="aph">
              <img src={Fabrizio} alt="Fabrizio Bottesi — Mastro Gelataio, Gelateria Cento Per Cento, Malcesine" className="ap-img" loading="lazy" itemProp="image" />
              <div className="ap-overlay">
                <span className="ap-icon">🧑‍🍳</span>
                <span className="ap-txt">{t('pl')}</span>
              </div>
            </div>
            <aside className="yb" aria-label="30 anni di esperienza">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="yb-crown" aria-hidden="true">
                <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
              </svg>
              <span className="yb-n">30</span>
              <span className="yb-l">{t('yl')}</span>
            </aside>
          </div>
          <div className="rv from-right">
            <p className="eyebrow">{t('ab_e')}</p>
            <h2 className="stitle" dangerouslySetInnerHTML={{ __html: t('ab_t') }}></h2>
            <div className="srule"></div>
            <p className="prose" itemProp="description">{t('ab_p1')}</p>
            <p className="prose">{t('ab_p2')}</p>
            <div className="stats" role="list" aria-label="Statistiche gelateria">
              <div className="sb" role="listitem">
                <div className="sn">{counts.years}+</div>
                <div className="sl">{t('s1')}</div>
              </div>
              <div className="sb" role="listitem">
                <div className="sn">4.8★</div>
                <div className="sl">{t('s2')}</div>
              </div>
              <div className="sb" role="listitem">
                <div className="sn">{counts.reviews}+</div>
                <div className="sl">{t('s3')}</div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
