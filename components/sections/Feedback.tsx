'use client';

import { Reveal } from '@/components/primitives/Reveal';
import { feedbackSection } from '@/content/feedback';

export function Feedback() {
  return (
    <section id="feedback" className="relative bg-cream-50 py-section">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-ink-900/50">
            {feedbackSection.eyebrow}
          </p>
          <h2 className="mt-6 text-display-md font-serif serif-italic max-w-[18ch] leading-[1.05]">
            {feedbackSection.heading}
          </h2>
          <p className="mt-6 max-w-prose-narrow text-lg text-ink-900/70">
            {feedbackSection.lead}
          </p>
        </Reveal>
        <div className="mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
          {feedbackSection.quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="h-full p-8 md:p-10 rounded-3xl bg-cream-100 hairline border flex flex-col justify-between min-h-[18rem]">
                <blockquote className="text-xl md:text-2xl font-serif serif-italic leading-[1.2] text-ink-900">
                  „{q.text}"
                </blockquote>
                <figcaption className="mt-8 text-xs tracking-[0.22em] uppercase text-ink-900/50">
                  {q.attribution}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
