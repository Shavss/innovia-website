'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

const directions = {
  up: { y: 20, x: 0 },
  left: { y: 0, x: 20 },
  right: { y: 0, x: -20 },
  none: { y: 0, x: 0 },
};

export default function AnimatedReveal({
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  children,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();

  const offset = directions[direction] ?? directions.up;
  const initial = reduceMotion ? { opacity: 1 } : { opacity: 0, ...offset };
  const animate =
    inView || reduceMotion ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
