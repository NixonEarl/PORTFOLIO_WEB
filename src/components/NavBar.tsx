import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('top');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 8);

      let currentId = 'top';
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);

      for (const link of navLinks) {
        const id = link.href.slice(1);
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        // Clamp to the bottom of the page: the last section (footer) can be
        // shorter than the viewport, so its raw offset may be unreachable.
        const triggerAt = Math.min(section.offsetTop - 120, maxScroll);

        if (scrollY >= triggerAt - 2) {
          currentId = id;
        }
      }
      setActiveId(currentId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ease-out ${
        scrolled || menuOpen
          ? 'border-zinc-800 bg-zinc-950/85 backdrop-blur-md'
          : 'border-zinc-800/60 bg-zinc-950/50 backdrop-blur-sm'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <a href="#top" onClick={() => setMenuOpen(false)} className="group inline-flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center border border-emerald-400/40 bg-emerald-400/5 text-xs font-bold text-emerald-400 transition-colors duration-300 ease-out group-hover:border-emerald-400/70 group-hover:bg-emerald-400/10">
            NE
          </span>
          <span className="text-sm font-semibold text-zinc-100">Nixon Estrella</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-300 ease-out ${
                  isActive ? 'text-emerald-400' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-emerald-400 transition-transform duration-300 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center border border-zinc-800 text-zinc-400 transition-all duration-300 ease-out hover:border-emerald-400/50 hover:text-emerald-400 md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-zinc-800 bg-zinc-950/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between border px-4 py-3 text-sm font-medium transition-colors duration-300 ease-out ${
                      isActive
                        ? 'border-emerald-400/40 bg-emerald-400/5 text-emerald-400'
                        : 'border-zinc-800 text-zinc-400 hover:border-emerald-400/40 hover:text-zinc-100'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`h-1.5 w-1.5 bg-emerald-400 transition-opacity duration-300 ease-out ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
