import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const contactLinks = [
  { label: 'estrellanixon24@gmail.com', href: 'mailto:estrellanixon24@gmail.com', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/NixonEstrella24', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nixon-estrella-22966a411', icon: Linkedin },
];

export function ContactFooter() {
  return (
    <footer id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-7xl"
      >
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-400">Contact</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  className="group flex items-center justify-between gap-4 border border-zinc-800 bg-zinc-950 px-4 py-4 text-zinc-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-emerald-400 hover:shadow-emerald-line"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate text-sm font-medium">{link.label}</span>
                  </span>
                  <span className="h-1.5 w-1.5 shrink-0 bg-emerald-400 opacity-70 transition-transform duration-300 ease-out group-hover:scale-125" />
                </a>
              );
            })}
        </div>
      </motion.div>

      <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-3 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Nixon Estrella. Built with React, TypeScript, and Tailwind CSS.</p>
        <a
          href="#top"
          className="group inline-flex w-fit items-center gap-2 border border-zinc-800 px-3.5 py-2 text-xs font-semibold text-zinc-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400/50 hover:text-emerald-400 hover:shadow-emerald-line"
        >
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
