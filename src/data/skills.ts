import { Bug, Cloud, Component, Smartphone } from 'lucide-react';
import type { SkillCategory } from '../types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend & UI',
    icon: Component,
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Component Design', 'Responsive Layouts'],
  },
  {
    title: 'Mobile Platform',
    icon: Smartphone,
    items: ['Capacitor', 'Web-to-Native Runtimes', 'Offline Persistence', 'Mobile-First UX'],
  },
  {
    title: 'Backend',
    icon: Cloud,
    items: ['MySQL', 'Cloud Firestore / Auth', 'Supabase', 'Real-Time Data Sync', 'Session Persistence'],
  },
  {
    title: 'QA & Software Testing',
    icon: Bug,
    items: ['Testing & Quality Assurance', 'System Validation'],
  },
];
