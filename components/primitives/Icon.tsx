import type { ValueCard } from '@/content/values';

export function Icon({ name }: { name: ValueCard['icon'] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 28 28',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.3,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (name) {
    case 'compass':
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="10" />
          <path d="M18 10l-2.2 6L10 18l2.2-6L18 10z" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...common}>
          <path d="M14 22s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0121 12c0 5.5-7 10-7 10z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path d="M14 4l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V7l8-3z" />
        </svg>
      );
    case 'chat':
      return (
        <svg {...common}>
          <path d="M5 7h18v12H12l-5 4v-4H5z" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common}>
          <path d="M14 3v5M14 20v5M3 14h5M20 14h5M6 6l3 3M19 19l3 3M6 22l3-3M19 9l3-3" />
        </svg>
      );
    case 'target':
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="10" />
          <circle cx="14" cy="14" r="5" />
          <circle cx="14" cy="14" r="1.3" fill="currentColor" />
        </svg>
      );
    case 'map':
      return (
        <svg {...common}>
          <path d="M4 7l6-2 8 2 6-2v16l-6 2-8-2-6 2V7z" />
          <path d="M10 5v16M18 7v16" />
        </svg>
      );
    case 'check':
      return (
        <svg {...common}>
          <circle cx="14" cy="14" r="10" />
          <path d="M9.5 14l3 3 6-6" />
        </svg>
      );
  }
}
