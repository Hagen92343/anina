'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactSection, type Field } from '@/content/contact';
import { cn } from '@/lib/utils';

export function Contact() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});

  const total = contactSection.steps.length;
  const current = contactSection.steps[step];
  const progress = ((step + 1) / total) * 100;

  const set = (name: string, v: string) => setValues((prev) => ({ ...prev, [name]: v }));

  const canNext = current.fields.every(
    (f) => !f.required || (values[f.name] && values[f.name].trim().length > 0)
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Anfrage Weltengestalter');
    const body = encodeURIComponent(
      Object.entries(values)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n')
    );
    window.location.href = `mailto:hallo@troublemaker-thinking.com?subject=${subject}&body=${body}`;
    setDone(true);
  };

  return (
    <section id="kontakt" className="relative bg-night-900 text-cream-100 py-section-lg">
      <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="text-xs tracking-[0.24em] uppercase text-cream-100/50">
            {contactSection.eyebrow}
          </p>
          <h2 className="mt-6 text-display-lg font-serif serif-italic leading-[0.98]">
            {contactSection.heading}
          </h2>
          <p className="mt-6 max-w-prose-narrow text-lg text-cream-100/70">
            {contactSection.lead}
          </p>
        </div>
        <div className="md:col-span-7">
          {done ? (
            <Success />
          ) : (
            <form onSubmit={submit} className="p-8 md:p-10 rounded-3xl bg-night-700/60 backdrop-blur-sm border border-cream-100/10">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-cream-100/50">
                <span>
                  Schritt {step + 1} / {total}
                </span>
                <span>{current.title}</span>
              </div>
              <div className="mt-3 h-px bg-cream-100/10 relative overflow-hidden rounded-full">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-dawn-500"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  {current.fields.map((f) => (
                    <FieldInput
                      key={f.name}
                      field={f}
                      value={values[f.name] ?? ''}
                      onChange={(v) => set(f.name, v)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className={cn(
                    'text-sm text-cream-100/70 hover:text-cream-50 transition-colors',
                    step === 0 && 'opacity-0 pointer-events-none'
                  )}
                >
                  ← Zurück
                </button>
                {step < total - 1 ? (
                  <button
                    type="button"
                    onClick={() => canNext && setStep((s) => s + 1)}
                    disabled={!canNext}
                    className={cn(
                      'rounded-full px-6 py-3 text-sm font-medium transition-all duration-500',
                      canNext
                        ? 'bg-cream-50 text-night-900 hover:bg-dawn-400'
                        : 'bg-cream-100/20 text-cream-100/40 cursor-not-allowed'
                    )}
                  >
                    Weiter →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="rounded-full px-6 py-3 text-sm font-medium bg-dawn-500 text-cream-50 hover:bg-dawn-600 transition-colors"
                  >
                    Nachricht senden →
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: string;
  onChange: (v: string) => void;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const full = field.type === 'textarea';

  return (
    <label className={cn('relative block', full && 'md:col-span-2')}>
      <span
        className={cn(
          'absolute left-4 pointer-events-none transition-all duration-300 ease-apple text-cream-100/60',
          active ? 'top-2 text-[10px] tracking-[0.22em] uppercase' : 'top-4 text-sm'
        )}
      >
        {field.label}
        {field.required ? ' *' : ''}
      </span>
      {field.type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          placeholder={active ? field.placeholder : ''}
          className="w-full pt-7 pb-3 px-4 bg-cream-100/5 border border-cream-100/10 focus:border-dawn-400 rounded-2xl text-cream-50 outline-none transition-colors resize-none"
        />
      ) : (
        <input
          type={field.type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pt-6 pb-2 px-4 bg-cream-100/5 border border-cream-100/10 focus:border-dawn-400 rounded-2xl text-cream-50 outline-none transition-colors"
        />
      )}
    </label>
  );
}

function Success() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="p-10 rounded-3xl bg-night-700/60 border border-cream-100/10 text-center"
    >
      <div className="mx-auto w-24 h-24 relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-dawn-400 to-dawn-600"
        />
      </div>
      <h3 className="mt-8 text-2xl font-serif serif-italic">Dein E-Mail-Programm öffnet sich.</h3>
      <p className="mt-3 text-cream-100/70">Wir freuen uns auf deine Nachricht.</p>
    </motion.div>
  );
}
