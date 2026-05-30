import type { LucideIcon } from 'lucide-react';

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  coreSystemDescription: string;
  image: {
    src: string;
    alt: string;
  };
  stack: string[];
  screenshots: ProjectLink;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
};
