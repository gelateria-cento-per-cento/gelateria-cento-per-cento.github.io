import React from 'react';
import { useI18n } from '../hooks/useI18n';

export default function Marquee() {
  const { t, lang } = useI18n();
  const items = t('mq');

  if (!items || !Array.isArray(items)) return null;

  return (
    <div className="mq">
      <div className="mq-track">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mq-item">
            {item}<span className="mq-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
