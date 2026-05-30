import { useEffect, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { SectionHeader } from './SectionHeader';
import type { Project } from '../types/portfolio';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="border-b border-zinc-800 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <SectionHeader
            eyebrow="Engineering case studies"
            title="Projects framed by constraints, tradeoffs, and system behavior."
            description="Each build focuses on the underlying logic that made the product surface reliable, observable, and easier to operate."
          />
        </motion.div>

        <div className="mt-14 grid gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group relative cursor-zoom-in overflow-hidden rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-950 transition-all duration-300 ease-out hover:border-emerald-400/60 hover:bg-gradient-to-br hover:from-zinc-800/50 hover:to-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-5 pointer-events-none" />

              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative overflow-hidden border-b border-zinc-800 bg-zinc-900/40 lg:border-b-0 lg:border-r">
                  <div className="flex h-[20rem] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900 sm:h-[24rem] lg:h-[28rem]">
                    <img
                      src={project.image.src}
                      alt={project.image.alt}
                      className="h-full w-full object-contain opacity-90 transition duration-300 ease-out group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                </div>

                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight text-zinc-100 group-hover:text-emerald-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="mt-1 h-3 w-3 shrink-0 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"
                    />
                  </div>

                  <div className="mt-6 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400/70">
                      System Overview
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-zinc-300 group-hover:text-zinc-100 transition-colors duration-300">
                      {project.coreSystemDescription}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="border-t border-zinc-800/50 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 mb-3">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((technology) => (
                          <motion.span
                            key={technology}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                            className="px-3 py-1.5 text-xs font-medium text-emerald-300/80 border border-emerald-400/20 rounded bg-emerald-400/5 hover:bg-emerald-400/10 hover:border-emerald-400/40 transition-all duration-300"
                          >
                            {technology}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} screenshot preview`}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-6xl border border-zinc-800 bg-zinc-950 rounded-lg overflow-hidden shadow-[0_24px_90px_rgba(0,0,0,0.65)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 sm:px-6 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-400">Project Preview</p>
                <h3 className="mt-2 text-lg font-bold text-zinc-100">{selectedProject.title}</h3>
              </div>
              <motion.button
                type="button"
                onClick={() => setSelectedProject(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-10 w-10 items-center justify-center border border-zinc-800 rounded text-zinc-400 transition-all duration-300 ease-out hover:border-emerald-400/50 hover:text-emerald-400"
                aria-label="Close project preview"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>
            <div className="max-h-[76vh] overflow-auto bg-gradient-to-br from-zinc-900/30 to-zinc-950 p-3 sm:p-6">
              <img
                src={selectedProject.image.src}
                alt={selectedProject.image.alt}
                className="mx-auto max-h-[70vh] w-auto max-w-full object-contain rounded"
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </section>
  );
}
