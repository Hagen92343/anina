export type Field = {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  required?: boolean;
  placeholder?: string;
};

export const contactSection = {
  eyebrow: 'Kontakt',
  heading: 'Schreib uns eine Mail.',
  lead:
    'Wir melden uns meist innerhalb weniger Tage \u2013 mit einem konkreten nächsten Schritt.',
  steps: [
    {
      title: 'Über dich',
      fields: [
        { name: 'firstName', label: 'Vorname', type: 'text', required: true },
        { name: 'lastName', label: 'Nachname', type: 'text', required: true },
        { name: 'email', label: 'E-Mail', type: 'email', required: true },
        { name: 'phone', label: 'Telefon', type: 'tel' },
      ],
    },
    {
      title: 'Deine Schule',
      fields: [
        { name: 'school', label: 'Schulname', type: 'text', required: true },
        { name: 'city', label: 'Schulort', type: 'text', required: true },
        { name: 'students', label: 'Schüleranzahl', type: 'number' },
        { name: 'existingCourses', label: 'Bestehende Kurse / Angebote', type: 'text' },
        { name: 'timeBudget', label: 'Zeitkontingent pro Woche', type: 'text' },
      ],
    },
    {
      title: 'Deine Nachricht',
      fields: [
        { name: 'message', label: 'Worum geht es dir?', type: 'textarea', placeholder: 'Erzähl uns, was dich zu Weltengestalter führt ...' },
      ],
    },
  ] as { title: string; fields: Field[] }[],
};
