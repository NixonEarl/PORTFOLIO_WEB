import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { SectionHeader } from './SectionHeader';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-zinc-800 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeader
            eyebrow="Technical toolkit"
            title="Building scalable apps with a highly focused development stack."
            description="A unified collection of modern tools and frameworks curated to handle everything from interactive layouts and native mobile deployment to secure data storage and functional testing."
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid border-l border-t border-zinc-800 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.article
                key={category.title}
                variants={item}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="group min-h-[20rem] border-b border-r border-zinc-800 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-400/35 hover:bg-zinc-900/40 hover:shadow-emerald-line"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-zinc-800 text-emerald-400 transition-colors duration-300 ease-out group-hover:border-emerald-400/50">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-zinc-100">{category.title}</h3>
                <ul className="mt-6 space-y-3">
                  {category.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-sm text-zinc-400">
                      <span className="h-px w-4 bg-zinc-700" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
