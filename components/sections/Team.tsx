'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Reveal } from '@/components/primitives/Reveal';
import { teamSection } from '@/content/team';

export function Team() {
  return (
    <section id="team" className="relative bg-cream-50 py-section-lg">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-xs tracking-[0.24em] uppercase text-ink-900/50">
            {teamSection.eyebrow}
          </p>
          <h2 className="mt-6 text-display-lg font-serif serif-italic leading-[0.98]">
            {teamSection.heading}
          </h2>
          <p className="mt-6 max-w-prose-narrow text-lg text-ink-900/70">
            {teamSection.lead}
          </p>
        </Reveal>

        <div className="mt-24 grid md:grid-cols-2 gap-12 md:gap-20">
          {teamSection.members.map((m, i) => (
            <TeamCard key={i} member={m} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  reverse,
}: {
  member: (typeof teamSection.members)[number];
  reverse: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <div ref={ref} className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-100">
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 40vw, 90vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-night-900/30 to-transparent pointer-events-none" />
      </div>
      <div className="mt-8">
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-serif serif-italic text-night-900">
            {member.name}
          </h3>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-ink-900/50">
            {member.role}
          </p>
          <p className="mt-6 max-w-prose-narrow text-base md:text-lg text-ink-900/75 leading-relaxed">
            {member.bio}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
