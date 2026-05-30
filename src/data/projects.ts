import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'ReClaim PLV Lost & Found System',
    coreSystemDescription:
      'A campus lost-and-found platform that centralizes verified item reports, searchable board filters, privacy-aware blurred photos, and claim initiation flows so students can recover belongings through a more structured verification process.',
    image: {
      src: '/project-reclaim.png',
      alt: 'ReClaim lost and found system board with search, filters, and verified item cards',
    },
    stack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Node.js'],
    screenshots: { label: 'More screenshots', href: 'https://example.com/reclaim-screenshots' },
  },
  {
    title: 'ARTA-CSS Val',
    coreSystemDescription:
      'An ARTA-compliant customer satisfaction survey system for civic feedback collection, built around a centralized feedback hub, direct survey entry points, QR access, and structured citizen response flow.',
    image: {
      src: '/project-arta.png',
      alt: 'ARTA compliant customer satisfaction survey landing page for City of Valenzuela',
    },
    stack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    screenshots: { label: 'More screenshots', href: 'https://example.com/arta-screenshots' },
  },
  {
    title: 'TrikeServe',
    coreSystemDescription:
      'An all-in-one on-demand mobile app that seamlessly combines food delivery and ride-hailing services for everyday convenience.',
    image: {
      src: '/project-trikeserve.png',
      alt: 'TrikeServe mobile ordering interface with restaurant cards and bottom navigation',
    },
    stack: ['React', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Google Maps API'],
    screenshots: { label: 'More screenshots', href: 'https://example.com/trikeserve-screenshots' },
  },
  {
    title: 'Gora na Explorer! Wild Clash',
    coreSystemDescription:
      'A digital board game expansion app that brings Philippine mythology and folklore to life through a vibrant, culturally inspired video game experience.',
    image: {
      src: '/project-gora.jpg',
      alt: 'Gora na Explorer Wild Clash gameplay screen with board, dice, player list, and skills panel',
    },
    stack: ['C#', 'Unity'],
    screenshots: { label: 'More screenshots', href: 'https://example.com/gora-na-explorer-screenshots' },
  },
   {
    title: 'Gora na Explorer!',
    coreSystemDescription:
      'A complete digital translation of the tabletop board game, bringing rich Philippine folklore and mythology to life in a vibrant, interactive video game format.',
    image: {
      src: '/project-gora-gameplay.png',
      alt: 'Gora na Explorer Wild Clash game title screen with play settings and exit buttons',
    },
    stack: ['C#', 'Unity'],
    screenshots: { label: 'More screenshots', href: 'https://example.com/gora-na-explorer-screenshots' },
  },
];
