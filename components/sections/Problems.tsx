'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { problemsSection } from '@/content/problems';

export function Problems() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const total = problemsSection.statements.length;

  return (
    <section id="probleme" className="relative bg-night-900 text-cream-100">
      <div ref={ref} style={{ height: `${total * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-content mx-auto w-full px-6 md:px-10 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.24em] uppercase text-cream-100/50">
                {problemsSection.eyebrow}
              </p>
              <h2 className="mt-6 text-display-sm md:text-display-md font-serif serif-italic">
                {problemsSection.heading}
              </h2>
              <p className="mt-6 text-cream-100/60 max-w-prose-narrow">
                {problemsSection.intro}
              </p>
            </div>
            <div className="md:col-span-8 relative min-h-[40vh]">
              {problemsSection.statements.map((s, i) => {
                const start = i / total;
                const mid = (i + 0.5) / total;
                const end = (i + 1) / total;
                const opacity = useTransform(
                  scrollYProgress,
                  [Math.max(0, start - 0.02), start, end, Math.min(1, end + 0.02)],
                  [0, 1, 1, 0]
                );
                const y = useTransform(
                  scrollYProgress,
                  [start, mid, end],
                  [30, 0, -30]
                );
                return (
                  <motion.div
                    key={i}
                    style={{ opacity, y }}
                    className="absolute inset-0 flex items-center"
                  >
                    <div>
                      <span className="text-sm text-dawn-400 tracking-[0.24em] uppercase">
                        {String(i + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                      </span>
                      <p className="mt-6 text-3xl md:text-5xl font-serif serif-italic leading-[1.1] text-cream-50 max-w-[22ch]">
                        {s}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
