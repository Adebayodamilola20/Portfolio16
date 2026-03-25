'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function ScrollFadeIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 20
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

