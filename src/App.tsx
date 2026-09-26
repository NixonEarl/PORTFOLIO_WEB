import { ContactFooter } from './components/ContactFooter';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { VideoSection } from './components/VideoSection';

function App() {
  return (
    <main id="top" className="min-h-screen bg-zinc-950 text-zinc-100">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <VideoSection />
      <ContactFooter />
    </main>
  );
}

export default App;
