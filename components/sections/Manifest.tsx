'use client';

import { Reveal, RevealWords } from '@/components/primitives/Reveal';
import { manifest } from '@/content/hero';

export function Manifest() {
  return (
    <section id="manifest" className="relative bg-cream-50 py-section">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-5 md:col-start-1">
          <p className="text-xs tracking-[0.24em] uppercase text-ink-900/50">Manifest</p>
          <h2 className="mt-6 text-display-md font-serif serif-italic text-night-900 leading-[1.05]">
            <RevealWords text={manifest.quote} />
          </h2>
        </Reveal>
        <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg md:text-xl text-ink-900/75 leading-relaxed">
          {manifest.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.15}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
