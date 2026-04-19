'use client';

import { useEffect, useRef, useState } from 'react';

const offsets = {
  up: 'translate3d(0, 20px, 0)',
  left: 'translate3d(20px, 0, 0)',
  right: 'translate3d(-20px, 0, 0)',
  none: 'translate3d(0, 0, 0)',
};

export default function AnimatedReveal({
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  children,
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setRevealed(true);
      return undefined;
    }
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return undefined;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduceMotion]);

  const offset = offsets[direction] ?? offsets.up;
  const style = reduceMotion
    ? undefined
    : {
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translate3d(0, 0, 0)' : offset,
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: revealed ? 'auto' : 'opacity, transform',
      };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
