'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nav, site } from '@/content/site';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-apple',
        scrolled
          ? 'backdrop-blur-xl bg-cream-50/70 border-b border-ink-900/[0.06]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="text-sm font-medium tracking-tight">
          <span className="text-ink-900">{site.name}</span>
          <span className="text-ink-900/40"> · Troublemaker Thinking</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-900/70 hover:text-ink-900 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="text-sm font-medium px-4 py-2 rounded-full bg-ink-900 text-cream-50 hover:bg-dawn-500 transition-colors duration-300"
          >
            Kontakt
          </a>
        </nav>
        <button
          aria-label="Menü"
          className="md:hidden w-9 h-9 grid place-items-center rounded-full hairline border"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d={open ? 'M3 3L13 13M13 3L3 13' : 'M2 5h12M2 11h12'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-cream-50/95 backdrop-blur-xl border-b border-ink-900/[0.06]"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-ink-900/80"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
