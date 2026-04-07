import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    const observeElements = () => {
      const elements = document.querySelectorAll('.rv:not(.vis):not(.observed)');
      elements.forEach(el => {
        el.classList.add('observed');
        observer.observe(el);
      });
    };

    observeElements();

    const mutObserver = new MutationObserver(() => {
      observeElements();
    });
    
    mutObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObserver.disconnect();
    };
  }, []);
}
