'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { hero } from '@/content/hero';
import { MagneticButton } from '@/components/primitives/MagneticButton';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-cream-50">
      <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0 -z-10">
        <Image
          src="/images/sections/hero-mood.avif"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.35] mix-blend-multiply"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/40 via-cream-50/20 to-cream-50" />
      </motion.div>

      <div className="relative max-w-content mx-auto px-6 md:px-10 pt-40 md:pt-48 pb-32">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs md:text-sm uppercase tracking-[0.24em] text-ink-900/60"
          >
            {hero.kicker} — {hero.untertitel}
          </motion.p>

          <h1 className="mt-8 md:mt-12 text-display-xl font-serif serif-italic text-night-900 max-w-[18ch]">
            {hero.leitsatz.split(' ').map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.15em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.25 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 text-lg md:text-xl text-ink-900/75 max-w-prose-narrow leading-relaxed"
          >
            {hero.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={hero.cta.href}>{hero.cta.label}</MagneticButton>
            <a
              href={hero.secondary.href}
              className="text-sm font-medium text-ink-900/70 hover:text-ink-900 transition-colors duration-300 px-2 py-3"
            >
              {hero.secondary.label} ↓
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.6 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 text-ink-900/40">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="block w-px h-10 bg-ink-900/30"
          />
        </div>
      </motion.div>
    </section>
  );
}
