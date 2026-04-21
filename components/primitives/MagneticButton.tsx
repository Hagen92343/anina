'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
};

export function MagneticButton({ href, children, variant = 'primary', className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setPos({ x, y });
  };

  const styles =
    variant === 'primary'
      ? 'bg-ink-900 text-cream-50 hover:bg-dawn-500'
      : 'bg-transparent text-ink-900 border border-ink-900/20 hover:border-ink-900/60';

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.5 }}
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-500 ease-apple',
        styles,
        className
      )}
    >
      <span>{children}</span>
      <motion.span animate={{ x: pos.x * 0.3 }} className="inline-block">
        →
      </motion.span>
    </motion.a>
  );
}
