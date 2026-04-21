'use client';

import { Reveal } from '@/components/primitives/Reveal';
import { Icon } from '@/components/primitives/Icon';
import type { ValueCard } from '@/content/values';
import { cn } from '@/lib/utils';

type Props = {
  id: string;
  eyebrow: string;
  heading: string;
  lead: string;
  cards: ValueCard[];
  tone?: 'light' | 'dark';
};

export function ValueCards({ id, eyebrow, heading, lead, cards, tone = 'light' }: Props) {
  const dark = tone === 'dark';
  return (
    <section
      id={id}
      className={cn(
        'relative py-section',
        dark ? 'bg-night-700 text-cream-100' : 'bg-cream-100 text-ink-900'
      )}
    >
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className={cn('text-xs tracking-[0.24em] uppercase', dark ? 'text-cream-100/60' : 'text-ink-900/50')}>
            {eyebrow}
          </p>
          <h2 className="mt-6 text-display-md font-serif serif-italic max-w-[16ch] leading-[1.05]">
            {heading}
          </h2>
          <p className={cn('mt-6 max-w-prose-narrow text-lg leading-relaxed', dark ? 'text-cream-100/70' : 'text-ink-900/70')}>
            {lead}
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-900/10 rounded-3xl overflow-hidden">
          {cards.map((c, i) => (
            <Reveal
              key={i}
              delay={0.05 * (i % 4)}
              className={cn(
                'p-8 md:p-10 flex flex-col gap-5 h-full',
                dark ? 'bg-night-700 hover:bg-night-500' : 'bg-cream-50 hover:bg-cream-100',
                'transition-colors duration-500 ease-apple'
              )}
            >
              <span className={cn(dark ? 'text-dawn-400' : 'text-dawn-500')}>
                <Icon name={c.icon} />
              </span>
              <div>
                <h3 className="text-lg font-medium tracking-tight">{c.title}</h3>
                <p className={cn('mt-2 text-sm leading-relaxed', dark ? 'text-cream-100/70' : 'text-ink-900/65')}>
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
