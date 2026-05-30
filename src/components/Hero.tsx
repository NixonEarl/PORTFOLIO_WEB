import { ArrowRight, ExternalLink, FileText, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const externalLinks = [
  { label: 'GitHub', href: 'https://github.com/NixonEstrella24', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nixon-estrella-22966a411', icon: Linkedin },
];

export function Hero() {
  return (
    <section className="relative border-b border-zinc-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="w-full max-w-3xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="text-sm font-medium uppercase tracking-[0.28em] text-emerald-400"
          >
            WEB DEV • MOBILE DEV • GAME DESIGN
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 space-y-4"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-emerald-400/60" />
              <h1 className="text-6xl font-bold tracking-normal text-zinc-100 sm:text-7xl lg:text-9xl">
                Nixon Estrella
              </h1>
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-emerald-400/60" />
            </div>
            <p className="text-lg font-medium text-emerald-400/80">
              Information Technology Student
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 text-lg leading-8 text-zinc-400 sm:text-xl sm:leading-9"
          >
            I translate heavy technical complexity into clean, simple, and intuitive digital products. Blending web and mobile development, I turn dense backend data and chaotic workflows into fast, seamless interfaces that feel effortless to use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 border border-emerald-400/40 bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              className="group inline-flex items-center justify-center gap-2 border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-100 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-emerald-line"
            >
              <FileText className="h-4 w-4" />
              CV
            </a>
            <div className="flex items-center gap-5 pt-2 sm:pl-3 sm:pt-0">
              {externalLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-300 ease-out hover:text-emerald-400"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                    <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
