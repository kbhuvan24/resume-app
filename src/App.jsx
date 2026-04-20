import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
