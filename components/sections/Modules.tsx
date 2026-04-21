'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { modulesSection, type Modul } from '@/content/modules';
import { Reveal } from '@/components/primitives/Reveal';
import { cn } from '@/lib/utils';

const toneMap: Record<Modul['tone'], string> = {
  cream: 'bg-cream-100 text-ink-900',
  dawn: 'bg-gradient-to-br from-dawn-400 to-dawn-600 text-cream-50',
  terra: 'bg-gradient-to-br from-terra-400 to-terra-500 text-cream-50',
  gold: 'bg-gradient-to-br from-gold-400 to-gold-500 text-night-900',
  night: 'bg-gradient-to-br from-night-500 to-night-900 text-cream-50',
};

export function Modules() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const total = modulesSection.modules.length;
  const xVW = useTransform(scrollYProgress, [0, 1], [0, -(total - 1) * 74]);
  const x = useTransform(xVW, (v) => `${v}vw`);

  return (
    <section id="module" className="relative bg-cream-50">
      <div className="max-w-content mx-auto px-6 md:px-10 pt-section">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-ink-900/50">
            {modulesSection.eyebrow}
          </p>
          <h2 className="mt-6 text-display-md font-serif serif-italic max-w-[18ch] leading-[1.05]">
            {modulesSection.heading}
          </h2>
          <p className="mt-6 max-w-prose-narrow text-lg text-ink-900/70">
            {modulesSection.lead}
          </p>
        </Reveal>
      </div>

      <div ref={ref} style={{ height: `${total * 90}vh` }} className="relative mt-24">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-6 md:gap-8 pl-[6vw] md:pl-[8vw]"
          >
            {modulesSection.modules.map((m, i) => (
              <ModuleCard key={m.nummer} m={m} index={i} total={total} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="h-section" />
    </section>
  );
}

function ModuleCard({ m, index, total }: { m: Modul; index: number; total: number }) {
  return (
    <article
      className={cn(
        'relative shrink-0 w-[82vw] md:w-[68vw] h-[72vh] rounded-[2rem] p-10 md:p-14 overflow-hidden grain flex flex-col justify-between',
        toneMap[m.tone]
      )}
    >
      <header className="flex items-start justify-between">
        <span className="font-serif serif-italic text-[18vw] md:text-[11vw] leading-none opacity-25 select-none -ml-2 -mt-6">
          {m.nummer}
        </span>
        <span className="text-xs tracking-[0.24em] uppercase opacity-70">
          Modul {index + 1} / {total}
        </span>
      </header>
      <div className="relative z-10">
        <h3 className="text-4xl md:text-6xl font-serif serif-italic leading-[1.02] max-w-[14ch]">
          {m.titel}
        </h3>
        <p className="mt-4 text-base md:text-xl opacity-80 max-w-[30ch]">{m.untertitel}</p>
        <ul className="mt-8 space-y-2 max-w-[44ch]">
          {m.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm md:text-base opacity-90">
              <span className="mt-[0.55em] inline-block w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
