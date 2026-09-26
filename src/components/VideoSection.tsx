import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

export function VideoSection() {
  return (
    <section id="video" className="border-b border-zinc-800 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            eyebrow="Featured"
            title="Demo Reel"
            description="A quick reel of my work — press play to watch it right here on the page."
          />

          <div className="mt-12 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/40 transition-colors duration-300 ease-out hover:border-emerald-400/50">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/WY-V4xDjCtA"
                title="Demo Reel video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
