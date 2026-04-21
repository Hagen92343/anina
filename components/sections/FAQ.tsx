'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/primitives/Reveal';
import { faqSection } from '@/content/faq';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream-100 py-section">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-xs tracking-[0.24em] uppercase text-ink-900/50">
              {faqSection.eyebrow}
            </p>
            <h2 className="mt-6 text-display-md font-serif serif-italic leading-[1.05]">
              {faqSection.heading}
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <ul className="divide-y divide-ink-900/10 border-t border-ink-900/10">
            {faqSection.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-6 md:py-8 flex items-center justify-between gap-6 group"
                  >
                    <span className="text-xl md:text-2xl font-serif serif-italic text-ink-900">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 w-10 h-10 rounded-full border border-ink-900/20 grid place-items-center text-ink-900"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 md:pb-10 pr-16 text-base md:text-lg text-ink-900/75 leading-relaxed">
                          {item.highlight ? (
                            <>
                              {item.a.replace(item.highlight, '').split(item.highlight)[0]}
                              <span className="block mt-6 text-display-sm md:text-display-md font-serif serif-italic text-dawn-500 tracking-tight">
                                {item.highlight}.
                              </span>
                              <span className="block mt-6">
                                {item.a.replace(item.highlight + '.', '').replace(item.highlight, '').trim()}
                              </span>
                            </>
                          ) : (
                            <p>{item.a}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
