import { ContactFooter } from './components/ContactFooter';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <main id="top" className="min-h-screen bg-zinc-950 text-zinc-100">
      <Hero />
      <Skills />
      <Projects />
      <ContactFooter />
    </main>
  );
}

export default App;
