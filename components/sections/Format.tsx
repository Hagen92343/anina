'use client';

import { Reveal } from '@/components/primitives/Reveal';
import { formatSection } from '@/content/format';

export function Format() {
  return (
    <section id="format" className="relative bg-cream-100 py-section">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-xs tracking-[0.24em] uppercase text-ink-900/50">
              {formatSection.eyebrow}
            </p>
            <h2 className="mt-6 text-display-md font-serif serif-italic leading-[1.05]">
              {formatSection.heading}
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <dl className="divide-y divide-ink-900/10">
            {formatSection.items.map((it, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8 py-6">
                  <dt className="w-full sm:w-48 shrink-0 text-sm uppercase tracking-[0.22em] text-ink-900/50">
                    {it.label}
                  </dt>
                  <dd className="text-xl md:text-2xl text-ink-900 font-serif serif-italic">
                    {it.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
