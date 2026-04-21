'use client';

import { Reveal } from '@/components/primitives/Reveal';
import { downloadsSection } from '@/content/format';

export function Downloads() {
  return (
    <section id="downloads" className="relative bg-cream-50 py-section">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-ink-900/50">
            {downloadsSection.eyebrow}
          </p>
          <h2 className="mt-6 text-display-md font-serif serif-italic max-w-[18ch] leading-[1.05]">
            {downloadsSection.heading}
          </h2>
          <p className="mt-6 max-w-prose-narrow text-lg text-ink-900/70">
            {downloadsSection.lead}
          </p>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {downloadsSection.files.map((f, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <a
                href={f.href}
                target="_blank"
                rel="noreferrer"
                className="group block p-10 rounded-3xl bg-cream-100 hover:bg-night-900 hover:text-cream-50 transition-colors duration-700 ease-apple"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-xs tracking-[0.24em] uppercase text-dawn-500 group-hover:text-dawn-400 transition-colors duration-500">
                      PDF
                    </span>
                    <h3 className="mt-4 text-2xl md:text-3xl font-serif serif-italic">
                      {f.label}
                    </h3>
                    <p className="mt-3 text-base opacity-70">{f.description}</p>
                  </div>
                  <span className="mt-2 text-2xl transition-transform duration-500 ease-apple group-hover:translate-x-2 group-hover:-translate-y-2">
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
